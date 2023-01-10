import React from "react";
import Header from "../Header/Header";
import '../MyProfile/MyProfile.css'
function MyProfile({email}) {
  return (
    <>
    <Header/>
      <div className="my-profile">
        <div className="my-profile__container">
          <div className="my-profile__header">
            <p>Мой профиль</p>
            <hr className="my-profile__rule" />
          </div>
          <div className="my-profile__info">
            <div className="my-profile__user">
              <p className="my-profile__key">Email:</p>
              <p className="my-profile__value">{email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfile