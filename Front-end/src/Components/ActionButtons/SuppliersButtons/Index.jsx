import { useContext, useState } from "react";
import {
    Button, Form, FormGroup, Input, Label,
    Modal, ModalBody, ModalFooter, ModalHeader
} from "reactstrap";

import { Context } from "../../Context/Index";

export const AddSupplier = () => {

    const { post } = useContext(Context);
    const [modal, setModal] = useState(false);
    const [supplier, setSupplier] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        address: ""
    });

    const openCloseModal = () => {
        setModal(!modal);
    }

    const submit = () => {
        post(supplier, "supplier");
        openCloseModal();
        event.preventDefault();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setSupplier({ ...supplier, [name]: value });
    }

    return (
        <>
            <Button onClick={openCloseModal} outline size="lg" color="primary">Add supplier</Button>

            <Modal isOpen={modal}>
                <ModalHeader>Add supplier</ModalHeader>
                <Form
                    onSubmit={submit}
                    onReset={openCloseModal}>

                    <ModalBody>
                        <FormGroup floating>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                maxLength="100"
                                placeholder="Name"
                                onChange={handleChange}
                                required />
                            <Label for="name">Name</Label>
                        </FormGroup>
                        <FormGroup floating>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                required />
                            <Label for="email">Email</Label>
                        </FormGroup>
                        <FormGroup floating>
                            <Input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder="Phone number"
                                pattern="^[0-9]{2} [0-9]{1,2} [0-9]{4}-[0-9]{4}$"
                                onChange={handleChange}
                                required />
                            <Label for="phoneNumber">Phone number</Label>
                        </FormGroup>
                        <FormGroup floating>
                            <Input
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Address"
                                onChange={handleChange}
                                required />
                            <Label for="address">Address</Label>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" color="primary">Add</Button>
                        <Button type="reset">Reset</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </>
    )
}

export const EditSupplier = (props) => {

    const { entity } = props;
    const { put } = useContext(Context);
    const [modal, setModal] = useState(false);
    const [supplier, setSupplier] = useState({ ...entity });

    const openCloseModal = () => {
        setModal(!modal);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSupplier({ ...supplier, [name]: value });
    }

    const submit = () => {
        put(supplier, "supplier");
        openCloseModal();
        event.preventDefault();
    }

    return (
        <>
            <Button onClick={openCloseModal} outline color="dark">Edit</Button>

            <Modal isOpen={modal} >
                <ModalHeader>Edit supplier</ModalHeader>
                <Form
                    onSubmit={submit}
                    onReset={openCloseModal}>

                    <ModalBody>
                        <FormGroup floating>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                maxLength="100"
                                placeholder="Name"
                                onChange={handleChange}
                                value={supplier && supplier.name}
                                required />
                            <Label for="name" >Name</Label>
                        </FormGroup>
                        <FormGroup floating>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                value={supplier && supplier.email}
                                required />
                            <Label for="email" >Email</Label>
                        </FormGroup>
                        <FormGroup floating>
                            <Input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder="00 0 0000-0000"
                                pattern="^[0-9]{2} [0-9]{1,2} [0-9]{4}-[0-9]{4}$"
                                onChange={handleChange}
                                value={supplier && supplier.phoneNumber}
                                required />
                            <Label for="phoneNumber">Phone number</Label>
                        </FormGroup>
                        <FormGroup floating>
                            <Input
                                type="text"
                                id="address"
                                name="address"
                                maxLength="200"
                                placeholder="Address"
                                onChange={handleChange}
                                value={supplier && supplier.address}
                                required />
                            <Label for="address" >Address</Label>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" color="primary">Submit</Button>
                        <Button type="reset">Reset</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </>
    )
}