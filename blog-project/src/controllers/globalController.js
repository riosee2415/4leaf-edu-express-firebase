import routes from "../routes";
import { firestore } from "../firebase";

export const home = async (req, res) => {
  let todoData = [];

  try {
    await firestore
      .collection("todo")
      .get()
      .then(docs => {
        docs.forEach(doc => {
          todoData.push({
            id: doc.id,
            task: doc.data().do
          });
        });
      });
  } catch (error) {
    console.log(error);
  }

  res.render("home", { todoData });
};

export const addTodo = async (req, res) => {
  const {
    body: { txt }
  } = req;

  try {
    await firestore.collection("todo").add({
      do: txt
    });
  } catch (error) {
    console.log(error);
    console.log("파이어베이스에 데이터를 추가하는데 실패했어!!");
  }

  home(req, res);
};

export const remove = async (req, res) => {
  const {
    body: { taskId }
  } = req;

  console.log("삭제할 아이디는 " + taskId + "입니다.");

  try {
    await firestore
      .collection("todo")
      .doc(taskId)
      .delete();
  } catch (error) {
    console.log("데이터 삭제 실패!");
    console.log(error);
  }

  home(req, res);
};
