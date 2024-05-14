import React from 'react'
import "./footer.scss"
import l1 from '../../assets/l1.svg'
import lmi from '../../assets/lmi.png'
import lni from '../../assets/lni.png'


function Footer() {
    return (
        <footer class="footer">
            <div class="footer__container">
                <div class="subscribe">
                    <div>
                        <img src={l1} alt="" />   
                    </div>
                    <p>Subscribe</p>
                    <p class="footer__text">Get 10% off your first order</p>
                    <form>
                        <input type="email" placeholder='Enter your email' className='email-input' />
                    </form>
                </div>
                <div class="support">
                    <h3>Support</h3>
                    <p class="footer__text">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
                    <p class="footer__text">Email: exclusive@gmail.com</p>
                    <p class="footer__text">Phone: +88015-88888-9999</p>
                </div>
                <div class="account-links">
                    <h3>Account</h3>
                    <ul>
                        <li><a href="#" class="account-link">My Account</a></li>
                        <li><a href="#" class="account-link">Login / Register</a></li>
                        <li><a href="#" class="account-link">Cart</a></li>
                        <li><a href="#" class="account-link">Wishlist</a></li>
                        <li><a href="#" class="account-link">Shop</a></li>
                    </ul>
                </div>
                <div class="quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#" class="quick-link">Privacy Policy</a></li>
                        <li><a href="#" class="quick-link">Terms Of Use</a></li>
                        <li><a href="#" class="quick-link">FAQ</a></li>
                        <li><a href="#" class="quick-link">Contact</a></li>
                    </ul>
                </div>
                <div class="download-app">
                    <h3>Download App</h3>
                    <p class="footer__text">Save $3 with App New User Only</p>
                    <div>
                       <img src={lmi} alt="" />
                    </div>
                    <div>
                        <img src={lni} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
