import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

const inputComment = css`
  font-family: 'New Tegomin';
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.3rem;
  width: 81%;
  margin: 0rem 0.2rem 0.2rem 3rem;
  padding: 0.4rem;
  text-align: center;
  border-radius: 0.5rem !important;
  border: 0.1rem solid #f4f0ec !important;
  min-height: 2rem;

  @media (min-width: 400px) and (max-width: 600px) {
    width: 80%;
    margin-left: 1.5rem;
    font-size: 0.8rem;
  }
`;

const title = css`
  text-align: center;
  font-size: 1.8rem;
  margin-top: -0.7rem;
  margin-left: 3rem;
  margin-bottom: 2rem;

  @media (min-width: 400px) and (max-width: 600px) {
   margin-left:-1rem;´
   font-size:2rem;
  }
`;

const mainChatBox = css`
  text-align: center;
  margin-top: -1rem;
  margin-right: 0 auto;
  margin-left: 0 auto;
  padding: 5px 70px;

  @media (min-width: 400px) and (max-width: 600px) {
    margin-left: -7rem !important;
  }
  @media (min-width: 601px) and (max-width: 800px) {
    margin-left: -5rem !important;
  }
  @media (min-width: 801px) and (max-width: 1100px) {
    margin-left: -3rem !important;
  }
`;

const button = css`
  color: #fff !important;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 1px;
  font-size: 0.6rem !important;
  margin-bottom: 0.7rem;
  margin-right: 0.1rem;
  padding: 0.2rem 0.2rem;
  border: none;
  border-radius: 0.2rem;
  background: rgb(150, 163, 131);
  transition: all 0.4s ease 0s;
  display: inline-block;
  :hover {
    background: rgb(150, 163, 131);
    letter-spacing: 3px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
`;

const buttonDelete = css`
  color: #fff !important;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 1px;
  font-size: 0.6rem !important;

  margin-bottom: 0.7rem;
  padding: 0.2rem 0.2rem;
  display: inline-block;
  border: none;
  border-radius: 0.2rem;
  background: #a7766a;
  transition: all 0.4s ease 0s;
  :hover {
    background: red;
    letter-spacing: 3px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
`;

const buttonPlus = css`
  color: #fff !important;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 1px;
  font-size: 1rem !important;
  margin-bottom: 0.7rem;
  margin-right: 0.1rem;
  padding: 0.4rem 0.6rem;
  border: none;
  border-radius: 0.2rem;
  background: rgb(150, 163, 131);
  transition: all 0.4s ease 0s;
  display: inline-block;
  :hover {
    background: rgb(150, 163, 131);
    letter-spacing: 3px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    margin-right: -3rem;
  }
`;

const messageContainer = css`
  text-align: center;
  margin-right: 0;
  margin-left: 3.5rem !important;
  position: relative;
  width: 90%;
  word-wrap: break-word;
  margin: 10px 0;
  padding-left: 10px;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: inset 0 -2em 1em #f1f0e1, 0 0 0 0px rgb(255, 255, 255),
    0.1em 0.1em 1em rgba(0, 0, 0, 0.1);
`;

const faUserCircle = css`
  position: absolute;
  font-size: 2.5rem;
  margin: 0.9rem 0.5rem 0.5rem 0.9rem;

  top: 0;
  left: 0;
`;

const messageUser = css`
  margin: 1rem 0 0 2.3rem;
  padding-top: 0.4rem;
  font-weight: bold;
  font-size: 1.2rem;
`;

const messageIconContainer = css`
  margin-top: 6px;
  margin-left: 2.3rem;
  font-size: 0.5rem;

  > * {
    display: inline-block;
    color: gray;
    margin-right: 10px;
    cursor: pointer;
    font-size: 1.1rem;
  }
`;

const thumbsUp = css`
  margin-bottom: 0.5rem;
`;

const likeText = css`
  margin-bottom: 0.2rem;
  margin-top: 0.1rem;
`;

export default function App(props) {
  const [theComment, setTheComment] = useState('');
  const [addComment, setAddComment] = useState('');
  const [editCommentId, setEditCommentId] = useState(0);
  const [disable, setDisable] = useState(true);

  function refreshPage() {
    window.location.reload(false);
  }

  // fetch gets API from the server, will rerender nonStop, in this case runs only once because of useEffect
  // From GIT "GET"

  useEffect(() => {
    const getComments = async () => {
      const response = await fetch(`/api/commentMain/${props.restaurantId}`);
      console.log('restaurantid', props.restaurantId);

      const data = await response.json();
      setTheComment(data);
      console.log('daaaata', data);
    };
    getComments();
  }, [props.restaurantId]);

  function handleSubmit(e) {
    e.preventDefault();

    // create a new Comment POST

    async function newComment() {
      const response = await fetch(`/api/commentMain/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          comment: addComment,
          user_id: props.userId,
          restaurant_id: props.restaurantId,
          username: props.username,
        }),
      });

      const created = await response.json();
      window.location.reload();
      return created;
    }
    newComment();
  }

  return (
    <div className="App">
      <header>
        <h1 css={title}>Comments Section</h1>
      </header>

      <section>
        <div css={mainChatBox}>
          <form onSubmit={handleSubmit}>
            <input
              css={inputComment}
              multiline={true}
              placeholder="Leave your Comment"
              id="Comment"
              onChange={(e) => setAddComment(e.currentTarget.value)}
            />
            <button css={buttonPlus}>+</button>
          </form>
        </div>
      </section>

      <div css={mainChatBox}>
        {theComment
          ? theComment.map((item) => {
              if (item.isLocked === false) {
                return (
                  <div css={messageContainer} key={item.id}>
                    <div css={messageUser}>{item.username}</div>
                    <i css={faUserCircle} className="fas fa-user-circle" />
                    <textarea
                      css={inputComment}
                      value={item.comment}
                      disabled={true}
                    />

                    <section css={messageIconContainer}>
                      <i
                        css={thumbsUp}
                        className="fas fa-thumbs-up"
                        aria-hidden="true"
                      />
                      <h2 css={likeText}>like</h2>
                    </section>
                  </div>
                );
              } else {
                return (
                  <div css={messageContainer} key={item.id}>
                    <div css={messageUser}>{item.username}</div>
                    <i css={faUserCircle} className="fas fa-user-circle" />
                    <textarea
                      css={inputComment}
                      onChange={(e) => {
                        const modifiedComments = [];
                        theComment.forEach((element) => {
                          if (element.id === item.id) {
                            element.comment = e.currentTarget.value;
                          }
                          modifiedComments.push(element);
                        });
                        console.log(modifiedComments);
                        setTheComment(modifiedComments);
                      }}
                      value={item.comment}
                    />

                    <section css={messageIconContainer}>
                      <i className="fas fa-thumbs-up" aria-hidden="true" />
                      <button
                        css={buttonDelete}
                        type="button"
                        onClick={async () => {
                          const response = await fetch(
                            `/api/commentMain/comment`,
                            {
                              method: 'DELETE',
                              headers: {
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                                id: item.id,
                              }),
                            },
                            refreshPage(),
                          );
                          const deletedComment = await response.json();
                          return deletedComment;
                        }}
                      >
                        Delete
                      </button>

                      <button
                        css={button}
                        onClick={async () => {
                          setEditCommentId(item.id);
                          if (editCommentId === item.Id) {
                            setDisable(true);
                          } else {
                            setDisable(false);
                            const response = await fetch(
                              `/api/commentMain/${item.id}`,
                              {
                                method: 'PUT',
                                headers: {
                                  'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                  comment: item.comment,
                                  id: item.id,
                                }),
                              },
                            );
                            console.log('propsid', item.id);
                            console.log('put', 'response');
                            await response.json();
                          }
                        }}
                      >
                        {disable ? 'Edit Details' : 'Save Changes'}
                      </button>
                    </section>
                  </div>
                );
              }
            })
          : null}
      </div>
    </div>
  );
}
