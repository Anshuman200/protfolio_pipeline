'use client'
import { Button, Form, Input } from 'antd'
import React from 'react'

const Contact = ({ nav }) => {
  const [form] = Form.useForm();
  const handleSubmitForm = (values) => {
    console.log("Submitted", values)
    form.resetFields()
  }

  const onFinishFailed = (values) => {
    console.log("values", values)
  }

  return (
    <div id={nav} className='bg__' style={{ display: 'grid', placeItems: 'center', minHeight: '80vh', padding: '0.5rem' }}>
      <div className="contact__wrapper">
        <h2>Contact Me</h2>
        <Form form={form} onFinish={handleSubmitForm} onFinishFailed={onFinishFailed}>
          <Form.Item name="name" rules={[{ required: true, message: 'Name is required' }]}>
            <Input allowClear className='contact__input' placeholder='Ansh Singh' />
          </Form.Item>
          <Form.Item name="email" rules={[{ required: true, message: 'Email is required' }]}>
            <Input allowClear className='contact__input' type='email' placeholder='ansh@yopmail.com' />
          </Form.Item>
          <Form.Item name="message" rules={[{ required: true, message: 'Message is required' }]}>
            <Input.TextArea allowClear className='contact__input' style={{ resize: 'none' }} rows={8} placeholder='Message' />
          </Form.Item>
          <Form.Item>
            <Button type='ghost' className='button submit__btn' block htmlType='submit'>Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Contact