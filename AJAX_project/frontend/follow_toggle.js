class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userID = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');
    this.render();
    this.handleClick();
  }

  handleClick () {
    this.$el.on('click', event => {
      event.preventDefault();

    if (this.followState === 'unfollowed'){
        this.followState = 'unfollowing';
        this.render();

        $.ajax({
          url: `/users/${this.userID}/follow`,
          method: 'POST',
          dataType: 'json'

        });
    } else if (this.followState === 'followed'){
        this.followState = 'following';
        this.render();

        $.ajax({
          url: `/users/${this.userID}/follow`,
          method: 'DELETE',
          dataType: 'json'
        });
      }
    });
  }

  render() {
    if (this.followState === 'unfollowed') {
      this.$el.html("Follow!");
    } else if (this.followState === 'followed')
      this.$el.html("Unfollow!");
  }





}


module.exports = FollowToggle;
