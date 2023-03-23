import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Hero from "../components/hero/Hero";
import AboutMain from "../components/about";
import Wrapper from "../layout/wrapper";
import SEO from "../components/Seo";
import Address from "../components/Address";
import Social from "../components/Social";
import Contact from "../components/Contact";
import SwitchDark from "../components/switch/SwitchDark";
import CustomLink from "../components/CustomLink";

const menuItem = [
  { icon: "fa-home", menuName: "Home" },
  { icon: "fa-user", menuName: "About" },
  { icon: "fa-envelope-open", menuName: "Contact" },
  { icon: "fa-comments", menuName: "Blog", href: "https://medium.com/@ricardogranda", isBlankTarget: true },
];

const isBlankTargetClass = "is-blank-target";

const HomeDark = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    document.querySelector("body").classList.remove("rtl");
  }, []);
  const customSelect = ((index, last, event) => {
    const { target: { className } } = event;

    const selectedIdx = !className.includes(isBlankTargetClass) ? index : last;
    setSelectedIndex(selectedIdx);
  });
  return (
    <Wrapper>
      <SEO pageTitle={"React Developer"} />

      <div className="yellow">
        <SwitchDark />
        {/* End Switcher */}
        <Tabs selectedIndex={selectedIndex} onSelect={customSelect}>
          <div className="header">
            <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
              {menuItem.map((item, i) => (
                <CustomLink href={item.href} key={i}>
                  <Tab className={`icon-box ${item.isBlankTarget && isBlankTargetClass}`} key={i}>
                    <i className={`fa ${item.icon}`}></i>
                    <h2>{item.menuName}</h2>
                  </Tab>
                </CustomLink>
              ))}
            </TabList>
          </div>
          {/* End Menu Content */}

          <div className="tab-panel_list">
            {/* Hero Content Starts */}
            <TabPanel className="home ">
              <div
                className="container-fluid main-container container-home p-0 g-0"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="color-block d-none d-lg-block"></div>
                <Hero />
              </div>
            </TabPanel>
            {/* Hero Content Ends */}

            {/* About Content Starts */}
            <TabPanel className="about">
              <div data-aos="fade-up" data-aos-duration="1200">
                <div className="title-section text-start text-sm-center">
                  <h1>
                    ABOUT <span>ME</span>
                  </h1>
                  <span className="title-bg">Resume</span>
                </div>
                {/* End title */}
                <AboutMain />
              </div>
            </TabPanel>
            {/* About Content Ends */}
            {/* Contact Content Starts */}
            <TabPanel className="contact">
              <div
                className="title-section text-start text-sm-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h1>
                  get in <span>touch</span>
                </h1>
                <span className="title-bg">contact</span>
              </div>
              <div
                className="container"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="row">
                  {/*  Left Side Starts */}
                  <div className="col-12 col-lg-4">
                    <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                      {"Don't"} be shy !
                    </h3>
                    <p className="open-sans-font mb-4">
                      Feel free to get in touch with me. I am always open to
                      discussing new projects, creative ideas or opportunities
                      to be part of your visions.
                    </p>
                    <Address />
                    {/* End Address */}

                    <Social />
                    {/* End Social */}
                  </div>
                  {/* Left Side Ends */}

                  {/*  Contact Form Starts  */}
                  <div className="col-12 col-lg-8">
                    <Contact />
                  </div>
                  {/*  Contact Form Ends */}
                </div>
              </div>
              {/* End .container */}
            </TabPanel>
            {/* Contact Content Ends */}
            <TabPanel></TabPanel>
          </div>
        </Tabs>
      </div>
    </Wrapper>
  );
};

export default HomeDark;
