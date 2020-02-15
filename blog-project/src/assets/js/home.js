// const { firestore } = require("../../firebase");
import { firestore } from "../../firebase";

const init = () => {
  console.log("Home init Function Start");
};

// global variable
let todoData = [];

/**
 * 함수이름 : getTodo
 * 파라미터 : 없음
 * 설   명 : firebase todo 컬렉션에 있는 데이터를 가져온다.
 * 생성자   : 윤상호
 * 생성일   : 2020-02-08
 * */
const getTodo = async () => {
  try {
    await firestore
      .collection("todo")
      .get()
      .then(docs => {
        docs.forEach(doc => {
          todoData.push(doc.data().do);
        });
      });
  } catch (error) {
    console.log("Error : getTodo");
    console.log(error);
  } finally {
    console.log(todoData);
  }
};

init();
