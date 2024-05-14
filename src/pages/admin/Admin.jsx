import React from 'react'
import { useNavigate } from 'react-router-dom'
import './admin.scss'

function Admin() {
  let navigate = useNavigate()
  const handleLoginOut = () => {
    navigate("/register")
    localStorage.clear("x-auth-token")
  }
  return (
    <section class="admin">
      <div class="container ">
        <div class="admin__overall">
          <div class="admin__info">
            <div class="admin__about">
              <p class="admin__about__title">
                Manage My Account
              </p>
              <div class="admin__about__info">
                <div class="admin__about__text">
                  My Profile
                </div>
                <div class="admin__about__text">
                  Address Book
                </div>
                <div class="admin__about__text">
                  My Payment Options
                </div>
              </div>
            </div>
            <div class="admin__about">
              <p class="admin__about__title">
                My Orders
              </p>
              <div class="admin__about__info">
                <div class="admin__about__text">
                  My Returns
                </div>
                <div class="admin__about__text">
                  My Cancellations
                </div>
              </div>
            </div>
            <p class="admin__about__title">
              My WishList
            </p>
          </div>
          <form>
            <h2 class="titleOfadmin">
              Edit Your Profile
            </h2>
            <div class="form__inputs">
              <div class="form__input">
                <label for="first_name">First Name:</label>
                <input placeholder="Md" type="text" id="first_name" name="first_name" class="styled-input" required />
              </div>

              <div class="form__input">

                <label for="last_name">Last Name:</label>
                <input placeholder="Rimel" type="text" id="last_name" name="last_name" class="styled-input" required />
              </div>

              <div class="form__input">

                <label for="email">Email Address:</label>
                <input placeholder="rimel1111@gmail.com" type="email" id="email" name="email" class="styled-input" required />
              </div>
              <div class="form__input">
                <label for="address">Address:</label>
                <input placeholder="Kingston, 5236, United State" type="text" id="address" name="address" class="input-field" required />
              </div>
              <label for="password">Password Changes</label>
              <input type="password" placeholder="Current Passwod" id="password" name="address" class="input-field" required />
              <input type="password" placeholder="New Passwod" id="password" name="address" class="input-field" required />
              <input type="password" placeholder="Confirm New Passwod" id="password" name="address" class="input-field" required />
            </div>
            <input type="submit" value="Save Changes" id="sub-btn" />
          </form>
        </div>
      </div>
      <div>
        <button className='logout' onClick={handleLoginOut}>Log out</button>

      </div>
    </section>
  )
}

export default Admin
