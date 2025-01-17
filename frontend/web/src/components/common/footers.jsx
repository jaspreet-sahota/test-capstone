import React, { Component } from "react";
import {Link}               from "react-router-dom";
import $ from "jquery";

//Import Image
import secondLogo           from "../../assets/images/logo-2.png"

class Footers extends Component {
    //Inherited Parent options.
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    //Init Js Scripts
    componentDidMount(){
        this.intiScripts();
    }

    intiScripts(){

        $(document).ready(function() {
            //  custom select input
            var x, i, j, l, ll, selElmnt, a, b, c;
            x = document.getElementsByClassName("custom-select");
            l = x.length;
            for (i = 0; i < l; i++) {
                selElmnt = x[i].getElementsByTagName("select")[0];
                ll = selElmnt.length;
                a = document.createElement("DIV");
                a.setAttribute("class", "select-selected");
                a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
                x[i].appendChild(a);
                b = document.createElement("DIV");
                b.setAttribute("class", "select-items select-hide");
                for (j = 1; j < ll; j++) {
                    c = document.createElement("DIV");
                    c.innerHTML = selElmnt.options[j].innerHTML;
                    c.addEventListener("click", function(e) {
                        var y, i, k, s, h, sl, yl;
                        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                        sl = s.length;
                        h = this.parentNode.previousSibling;
                        for (i = 0; i < sl; i++) {
                            if (s.options[i].innerHTML === this.innerHTML) {
                                s.selectedIndex = i;
                                h.innerHTML = this.innerHTML;
                                y = this.parentNode.getElementsByClassName("same-as-selected");
                                yl = y.length;
                                for (k = 0; k < yl; k++) {
                                    y[k].removeAttribute("class");
                                }
                                this.setAttribute("class", "same-as-selected");
                                break;
                            }
                        }
                        h.click();
                    });
                    b.appendChild(c);
                }
                x[i].appendChild(b);
                a.addEventListener("click", function(e) {
                    /*when the select box is clicked, close any other select boxes,
                    and open/close the current select box:*/
                    e.stopPropagation();
                    closeAllSelect(this);
                    this.nextSibling.classList.toggle("select-hide");
                    this.classList.toggle("select-arrow-active");
                });
            }
            function closeAllSelect(elmnt) {
                var x, y, i, xl, yl, arrNo = [];
                x = document.getElementsByClassName("select-items");
                y = document.getElementsByClassName("select-selected");
                xl = x.length;
                yl = y.length;
                for (i = 0; i < yl; i++) {
                    if (elmnt === y[i]) {
                        arrNo.push(i)
                    } else {
                        y[i].classList.remove("select-arrow-active");
                    }
                }
                for (i = 0; i < xl; i++) {
                    if (arrNo.indexOf(i)) {
                        x[i].classList.add("select-hide");
                    }
                }
            }
            document.addEventListener("click", closeAllSelect);

            // mobile menu
            $('.hamburger').on('click',function (event) {
                $(this).toggleClass('h-active');
                $('.main-nav').toggleClass('slidenav');
            });

            $('.header-home .main-nav ul li  a').on('click',function (event) {
                $('.hamburger').removeClass('h-active');
                $('.main-nav').removeClass('slidenav');
            });

            $(".main-nav .fl").on('click', function(event) {
                var $fl = $(this);
                $(this).parent().siblings().find('.sub-menu').slideUp();
                $(this).parent().siblings().find('.fl').addClass('flaticon-plus').text("+");
                if($fl.hasClass('flaticon-plus')){
                    $fl.removeClass('flaticon-plus').addClass('flaticon-minus').text("-");
                }else{
                    $fl.removeClass('flaticon-minus').addClass('flaticon-plus').text("+");
                }
                $fl.next(".sub-menu").slideToggle();
            });


            //account dropdown
            var accountCard = document.querySelectorAll('.account-dropdown')
            var userIcon = document.querySelectorAll('.user-dropdown-icon i')

            userIcon.forEach((el)=>{
                el.addEventListener('click', ()=>{
                    accountCard.forEach((element)=>{
                        element.classList.toggle("activeCard")
                    })
                })
            });

            // Search Bar js
            var searchOpen = document.querySelectorAll('.searchbar-open i')
            var searchCard = document.querySelectorAll('.main-searchbar')
            var searchClose = document.querySelectorAll('.searchbar-close i')

            searchOpen.forEach((el)=>{
                el.addEventListener('click',()=>{
                    searchCard.forEach((el)=>{
                        el.classList.add('activeSearch')
                    })
                })
            })
            searchClose.forEach((el)=>{
                el.addEventListener('click',()=>{
                    searchCard.forEach((el)=>{
                        el.classList.remove('activeSearch')
                    })
                })
            });

            window.onclick = function(event){
                searchCard.forEach((el)=>{
                    if(event.target === el){
                        el.classList.remove('activeSearch')
                    }
                });
                if(!event.target.matches('.user-dropdown-icon i')){
                    accountCard.forEach((element)=>{
                        if(element.classList.contains('activeCard')){
                            element.classList.remove('activeCard')
                        }
                    })
                }
            };

            // sticky navabr js
            $(window).on('scroll',function () {
                var scroll = $(window).scrollTop();
                if (scroll >= 10) {
                    $(".header-area").addClass("sticky");
                } else {
                    $(".header-area").removeClass("sticky");
                }
            });

            $(".preloader").delay(1000).fadeOut("slow");

        });

    }

    //Set data
    componentWillMount() {

    }
    //Un set data
    componentWillUnmount() {

    }
    scrollTop()
    {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render() {
        return (
            <>
                {/* ==============  Footer area start================= */}
                <div className="footer-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="footer-info">
                                    <div className="footer-logo">
                                        <img src={secondLogo} alt="" className="img-fluid" />
                                    </div>
                                    <p>LocaLens simplifies your adventures by putting every travel necessity within reach. 
                                        With LocaLens, you can effortlessly discover hidden gems and create unforgettable 
                                        memories. It's like having a personal tour guide, travel agent, and local expert, 
                                        all wrapped into one intuitive platform.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <div className="footer-links">
                                    <h5 className="widget-title">Contact Us</h5>
                                        <div className="contact-box">
                                            <span><i className="bx bx-phone" /></span>
                                                <div>
                                                    <a href="tel:123-456-7890">123-456-7890</a>
                                                </div>
                                        </div>
                                        <div className="contact-box">
                                            <span><i className="bx bx-mail-send" /></span>
                                            <div>
                                                <a href="mailto:localens2024@example.com">localens2024@gmail.com</a>
                                            </div>
                                        </div>
                                        <div className="contact-box">
                                            <span><i className="bx bx-location-plus" /></span>
                                            <div>
                                                <a href="https://www.google.com/maps/dir//245+Church+St,+Toronto,+ON+M5B+1Z4/@43.6575591,-79.3818076,16z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89d4cb357f11efa9:0x839bc2d3d2dbdb53!2m2!1d-79.3771995!2d43.6575553!3e0?authuser=0&entry=ttu" target="_blank" rel="noopener noreferrer">
                                                    245 Church Street <br />
                                                    Toronto, Ontario, Canada
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6">
                                    <div className="footer-links">
                                        <h5 className="widget-title">Support</h5>
                                        <div className="category-list">
                                            <ul>
                                            <li>
                                                <Link to={`${process.env.PUBLIC_URL}/contact`} onClick={this.scrollTop} >Contact Us</Link>
                                            </li>
                                            <li>
                                                <Link to={`${process.env.PUBLIC_URL}/about-us`} onClick={this.scrollTop}>About Us</Link>
                                            </li>
                                            <li>
                                                <Link to={`${process.env.PUBLIC_URL}/settings`} onClick={this.scrollTop} >My Account</Link>
                                            </li>
                                            <li>
                                                <Link to={`${process.env.PUBLIC_URL}/homepage`} className="sub-item" onClick={this.scrollTop}>Home</Link>
                                            </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="copyright-area">
                                    <p>Copyright 2024 | LocaLens | Designed By Jaspreet, Naureen, Anthony & Izza</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ==============  Footer area end================= */}
            </>
        );
    }
}

export default Footers;
