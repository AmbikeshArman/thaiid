import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {
  usePostResultMutation,
  useUploadImageMutation,
} from "../slices/userApiSlice";
import FormContainer from "../Components/FormContainer";

const HomeScreen = () => {
  const [post, { isLoading }] = usePostResultMutation();
  const [uploadImage, { isLoading: loadingUpload }] = useUploadImageMutation();

  const [image, setImage] = useState("");

  const submitHandler = async (e) => {};

  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    try {
      const res = await uploadImage(formData).unwrap();
      // toast.success(res.message);
      setImage(res.image);
    } catch (err) {
      console.log(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <FormContainer>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='image' className='my-2'>
            <Form.Label>Image</Form.Label>
            {/* <Form.Control
              type='text'
              placeholder='Enter Image URL'
              value={image}
              onChange={(e) => setImage}></Form.Control> */}
            <Form.Control
              type='file'
              label='Choose File'
              onChange={uploadFileHandler}></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary' className='my-2'>
            Upload
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default HomeScreen;
