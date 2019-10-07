import React, { Component } from "react";
import { Modal, Button, Alert, Form, Select, Typography, Input } from "antd";

class Feedback extends Component {
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
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Submit Feedback
                </Button>
                <Modal
                    title="Submit Feedback"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    okButtonProps={{ disabled: true }}
                    okText="Submit"
                    onCancel={this.handleCancel}
                    width="800px"
                    style={{top: 20}}
                >
                    <Form>
                        <Typography.Paragraph>
                            {this.props.feedbackText}
                        </Typography.Paragraph>

                        <Form.Item required label="Feedback Type">
                            <Select
                                defaultValue="missingpage"
                                placeholder="Feedback type"
                            >
                                <Option value="missingpage" selected>
                                    Missing Page
                                </Option>
                                <Option value="internal" selected>
                                    Internal Server Error
                                </Option>
                                <Option value="improve" selected>
                                    Tell us how we can improve
                                </Option>
                                <Option value="notworking" selected>
                                    Function(s) not working
                                </Option>
                                <Option value="other" selected>
                                    Other (not listed)
                                </Option>
                            </Select>
                        </Form.Item>

                        <Form.Item required label="Please entter a title">
                            <Input placeholder="Enter a title" />
                        </Form.Item>
                        <Form.Item required label="Please enter a description">
                            <Input.TextArea placeholder="Please tell us how we can improve" />
                        </Form.Item>
                        <Form.Item
                            required
                            label="Please tell us where the issue happened"
                        >
                            <Input addonBefore="https://wimm.media/" />
                        </Form.Item>
                        <Form.Item label="Please entter your email">
                            <Input
                                placeholder="Please enter your email"
                                icon="email"
                            />
                        </Form.Item>
                        <Alert
                            message="Please ensure all required fields are not empty"
                            type="info"
                            showIcon
                        />
                    </Form>
                </Modal>
            </div>
        );
    }
}

export default Feedback;
