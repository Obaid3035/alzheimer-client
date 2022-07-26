import React, { useState, useEffect } from 'react';
import { Col, Container, Form, Row,Spinner} from "react-bootstrap";
import Button from "../../Button/Button";
import { Document, Page, pdfjs } from 'react-pdf';
import DummyPdf from "../../../Assets/dummy.pdf";
import { authValidation } from "../../../lib/validation";
import Input from "../../Input/Input";
import { useForm } from "react-hook-form";
import Loader from '../../../util/loader';

const EditResume = () => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [loader, setLoader] = useState(true)
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm<{ resume: string }>();

    const EditResumeHandler = handleSubmit((data => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        
        console.log(data)
    }))

    const onDocumentLoadSuccess = () => {
        setNumPages(numPages);
    }

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    }, [])

    return (
        <Container>
            <h3>Edit Resume</h3>
            {loader ? <Loader /> :
                <Form onSubmit={EditResumeHandler}>
                    <Row>
                        <Col md={12}>
                            <Input>
                                <Form.Control
                                    type="file"
                                    placeholder='Choose file'
                                    {...register("resume", authValidation.resume)}
                                />
                                {errors.resume ? <small className={"text-danger"}>{errors.resume?.message}</small> : null}
                            </Input>
                        </Col>
                        <Col md={12}>
                            <Document file={DummyPdf} onLoadSuccess={onDocumentLoadSuccess}>
                                <Page pageNumber={pageNumber} />
                            </Document>
                        </Col>
                        <Col md={12} className={'d-flex justify-content-end mt-4'}>
                            <Button type="submit">
                            {loading ? <Spinner animation="border" size="sm" /> : "Submit"}
                            </Button>
                        </Col>
                    </Row>
                </Form>
            }
        </Container>
    );
};
export default EditResume;