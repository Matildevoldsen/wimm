import React, { Component } from "react";
import {
    Layout,
    Result,
    Typography,
} from "antd";
import Feedback from "../Feedback";

const { Content } = Layout;

class NotFound extends Component {
    render() {
        return (
            <Layout>
                <Content
                    style={{
                        background: "#fff",
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                        textAlign: "center"
                    }}
                >
                    <Result
                        status="404"
                        title="404 Page Not Found"
                        subTitle={
                            <Typography.Paragraph>
                                Sorry, the page you visited does not exist. If
                                you believe this was a mistake please submit
                                feedback using the button below.
                            </Typography.Paragraph>
                        }
                        extra={
                                <Feedback
                                    feedbackText="If you have any concerns or think this page should exist let
                    us know. If you have any other feedback to submit please
                    feel free to send it here. Only leave your E-mail address if
                    you wish to be contacted."
                                    typeIsDisabled="false"
                                />
                        }
                    />
                </Content>
            </Layout>
        );
    }
}

export default NotFound;
