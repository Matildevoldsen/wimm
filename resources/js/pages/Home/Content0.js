import React, { Component } from "react";
import { Row, Col, Icon, Typography } from "antd";
import { Parallax } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import Title from "antd/lib/typography/Title";

class Content0 extends Component {
    render() {
        return (
            <Parallax
            animation={{ x: '0', opacity: 1, playScale: [0.5, 0.8] }}
            style={{ transform: 'translateX(-100px)', opacity: 0 }}>
                    <div className="content0" id="content0">
                    <Title style={{paddingBottom: '40px'}}>We Offer</Title>
                        <Row
                            style={{ padding: "0 10px" }}
                            type="flex"
                            justify="space-between"
                        >
                            <Col className="gutter-row" span={6}>
                                <div className="iconContent">
                                    <Icon type="tool" className="iconBig" />
                                    <p className="iconText">We Maintain</p>
                                </div>
                                <p>
                                    Whenever there is a need for a security
                                    update or small changes to the website we
                                    will do it. If there is any issues we will
                                    fix it.
                                </p>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="iconContent">
                                    <Icon
                                        type="cloud-upload"
                                        className="iconBig"
                                    />
                                    <p className="iconText">We Host</p>
                                </div>
                                <p>
                                    We will ensure your website gets deployed to
                                    DigitalOcean and get you a domain name. We
                                    will also add in a SSL certificate for your
                                    website free of charge.
                                </p>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="iconContent">
                                    <Icon type="build" className="iconBig" />
                                    <p className="iconText">We Build</p>
                                </div>
                                <p>
                                    We will build your responsive-website as well as secure
                                    it. Your website will also have a content
                                    management system implemented to edit
                                    certain pages.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Parallax>
        );
    }
}

export default Content0;
