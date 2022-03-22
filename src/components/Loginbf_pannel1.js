import React from "react";
import styles from "./Loginbf_pannel1.module.css";
import FadeIn from "react-fade-in"

function Loginbf_pannel1() {
  // 로그인 버튼 클릭 시
  const login = () => {
    var loginForm = document.loginForm;
    var inputEmail = loginForm.inputEmail.value;
    var inputUsername = loginForm.inputUsername.value;

    if (!inputEmail || !inputUsername) {
      alert("아이디와 사용자명을 모두 입력해주세요.");
    } else {
      loginForm.submit();
      alert("입력하신 이메일로 아이디가 발송 되었습니다.");
    }
  };


  // input 태그 onFocus
  const highLight = (e) => {
    console.log(e.currentTarget.id);
    const targetID = e.currentTarget.id;
    const cur = ``
  }

  return (
    <main>
      <FadeIn>
      <div className={styles.pannel}>
        <h2 className={styles.pannelText}>아이디 찾기</h2>
        <span className={styles.pannelDes}>
          아이디는 가입시 입력하신 이메일을 통해 찾을 수 있습니다.
        </span>
      </div>
      <div className={styles.content}>
        <form name="loginForm">
          <div className={`${styles.row} ${styles.emailRow}`}>
            <label htmlFor="inputEmail">
              <img src="img/pannel1_img.png" />
            </label>
            <div className={styles.col}>
              <input
                type="email"
                id="inputEmail"
                placeholder="이메일"
                required
                onFocus={(e)=>{highLight(e)}}
              />
            </div>
          </div>
          <div className={`${styles.row} ${styles.usernameRow}`}>
            <label htmlFor="inputUsername">
              <img src="img/pannel1_img.png" />
            </label>
            <div className={styles.col}>
              <input
                type="text"
                id="inputUsername"
                placeholder="사용자명"
                required
              />
            </div>
          </div>
          <div className={styles.btnContainer}>
            <button
              type="submit"
              className={`${styles.btn} ${styles.btnPrimary}`}
              onClick={() => {
                login();
              }}
            >
              아이디발송
            </button>
            <button
              type="cancel"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              <a href="login.html">취소</a>
            </button>
          </div>
        </form>
      </div>
      </FadeIn>
    </main>
  );
}

export default Loginbf_pannel1;
