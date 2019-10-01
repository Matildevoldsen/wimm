import React, { Component } from "react";
import { Form, Select, Layout, Result, Button, Typography, Modal, Input } from "antd";
import { Link } from "react-router-dom";

const { Content } = Layout;
const { Option } = Select;

class NotFound extends Component {
    constructor(props) {
        super(props);

        this.state = { visible: false };

        this.handleCancel = this.handleCancel.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    showModal() {
        this.setState({
            visible: true
        });
    }

    handleOk(e) {
        console.log(e);
        this.setState({
            visible: false
        });
    }

    handleCancel(e) {
        console.log(e);
        this.setState({
            visible: false
        });
    }

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
                        title="404"
                        subTitle={
                            <Typography.Paragraph>
                                Sorry, the page you visited does not exist. If you believe this was a mistake please submit feedback using the button below.
                            </Typography.Paragraph>
                        }
                        extra={
                            <div>
                                <Button type="primary" onClick={this.showModal}>
                                    Submit Feedback
                                </Button>

                                <Modal
                                    title="Submit Feedback"
                                    visible={this.state.visible}
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}
                                >
                                    <Form onSubmit={this.handleSubmit}>
                                        <Typography.Paragraph>
                                            If you have any concerns or think
                                            this site should exist let us know.
                                            If you have any other feedback to
                                            submit please feel free to send it
                                            here. Only leave your E-mail address if
                                            you wish to be contacted.
                                        </Typography.Paragraph>

                                        <Form.Item required label="Feedback Type" >
                                            <Select defaultValue="missingpage" disabled placeholder="Feedback type">
                                                <Option value="missingpage" selected>
                                                    Missing Page
                                                </Option>
                                                <Option value="usa">
                                                    U.S.A
                                                </Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item required label="Please entter a title">
                                            <Input placeholder="Enter a title" />
                                        </Form.Item>
                                        <Form.Item required label="Please enter a description">
                                            <Input.TextArea placeholder="Please tell us how we can improve" />
                                        </Form.Item>
                                        <Form.Item required label="Please tell us where the issue happened">
                                            <Input addonBefore="https://wimm.media/" />
                                        </Form.Item>
                                        <Form.Item label="Please entter your email">
                                            <Input placeholder="Please enter your email" icon="email" />
                                        </Form.Item>
                                    </Form>
                                </Modal>
                            </div>
                        }
                    />
                </Content>
            </Layout>
        );
    }
}

export default NotFound;
