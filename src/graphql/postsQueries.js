export const getAllPostsAndAssociatedData = () => {
	return `query GetAllPostsAndAssociatedData {
    text_posts(order_by: {created_at: desc}) {
      id
      content
      user {
        id
        name
        title
      }
      likes {
        user_id
        type
      }
      comments {
        id
        comment
        user {
          name
        }
      }
      saves {
        id
        user_id
      }
    }
  }`;
};

export const addCommentToServer = (user_id, post_id, comment) => {
	return `mutation MyMutation {
    insert_comments_one(object: {user_id: "${user_id}", post_id: "${post_id}", comment: "${comment}"}) {
      id
      comment
      user {
        name
      }
      post_id
    }
  }`;
};

export const addSavedToServer = (user_id, post_id) => {
	return `mutation MyMutation {
    insert_saves_one(object: {user_id: "${user_id}", post_id: "${post_id}"}) {
      id
      user_id
      post_id
    }
  }
  `;
};

export const removeSavedFromServer = (user_id, post_id) => {
	return `mutation MyMutation {
    delete_saves(where: {user_id: {_eq: "${user_id}"}, post_id: {_eq: "${post_id}"}}) {
      affected_rows
    }
  }`;
};

export const addLikesOrDislikesToServer = (post_id, user_id, type) => {
	return `mutation AddLikesOrDislikesToServer {
        insert_likes_one(object: {post_id: "${post_id}", user_id: "${user_id}", type: ${type}}) {
          id
          post_id
          type
          user_id
        }
      }
      `;
};

export const updateLikesOrDislikesToServer = (post_id, user_id, type) => {
	return `mutation UpdateLikesOrDislikeToServer {
    update_likes(where: {user_id: {_eq: "${user_id}"}, post_id: {_eq: "${post_id}"}}, _set: {type: "${type}"}) {
      affected_rows
      returning {
        id
        post_id
        user_id
        type
      }
    }
  }
  `;
};

export const deleteReactionFromServer = (post_id, user_id) => {
	return `mutation DeleteReactionFromServer {
    delete_likes(where: {user_id: {_eq: "${user_id}"}, post_id: {_eq: "${post_id}"}}) {
      affected_rows
    }
  }`;
};

export const postPieceToServer = (user_id, content) => {
	return `mutation MyMutation {
    insert_text_posts_one(object: {user_id: "${user_id}", content: "${content}"}) {
      id
      content
      user{
        id
        name
        title
      }
      likes {
        user_id
        type
      }
      comments {
        id
        comment
      }
      saves {
        id
        user_id
      }
    }
  }
  
  `;
};
