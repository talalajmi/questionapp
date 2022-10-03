import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Table,
} from "reactstrap";
import "./Contests.css";
export default function Contests() {
  const [show, setShow] = useState(false);

  const contests = [
    {
      contestName: "Contest 1",
      questions: "3",
      isFinished: true,
      result: "5/5",
      rank: "1",
      name: "Ahmed",
      startDate: "1/1/2022",
      endDate: "1/1/2022",
    },
    {
      contestName: "Contest 1",
      questions: "3",
      isFinished: true,
      result: "5/5",
      rank: "1",
      name: "Ahmed",
      startDate: "1/1/2022",
      endDate: "1/1/2022",
    },
    {
      contestName: "Contest 1",
      questions: "3",
      isFinished: true,
      result: "5/5",
      rank: "1",
      name: "Ahmed",
      startDate: "1/1/2022",
      endDate: "1/1/2022",
    },
    {
      contestName: "Contest 1",
      questions: "3",
      isFinished: true,
      result: "5/5",
      rank: "1",
      name: "Ahmed",
      startDate: "1/1/2022",
      endDate: "1/1/2022",
    },
    {
      contestName: "Contest 1",
      questions: "3",
      isFinished: true,
      result: "5/5",
      rank: "1",
      name: "Ahmed",
      startDate: "1/1/2022",
      endDate: "1/1/2022",
    },
  ];

  const addContest = () => {};

  return (
    <div className="contests__container">
      <div className="contests__content">
        <div className="contest__AddButton">
          <Button color="primary" onClick={() => setShow((curr) => !curr)}>
            Add Contest
          </Button>
        </div>
        <div className="contests__table">
          <Card>
            <Table hover>
              <thead>
                <tr>
                  <th>Contest Name</th>
                  <th>Questions</th>
                  <th>Finished</th>
                  <th>Result</th>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                </tr>
              </thead>
              <tbody>
                {contests.map((contest, index) => (
                  <tr key={index}>
                    <td>{contest.contestName}</td>
                    <td>{contest.questions}</td>
                    <td>{contest.isFinished ? "Yes" : "No"}</td>
                    <td>{contest.result}</td>
                    <td>{contest.rank}</td>
                    <td>{contest.name}</td>
                    <td>{contest.startDate}</td>
                    <td>{contest.endDate}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
          <Modal isOpen={show} centered>
            <div className="p-3">
              <h3 className="fw-bolder my-3">Add Contest</h3>
              <Form className="mt-2">
                <FormGroup floating>
                  <Input id="contestName" name="contestName" type="text" />
                  <Label for="contestName">Contest Name</Label>
                </FormGroup>
                <Row>
                  <Col>
                    <FormGroup floating>
                      <Input id="question1" name="question1" />
                      <Label for="question1">Question 1 </Label>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup floating>
                      <Input id="answer1" name="answer1" type="text" />
                      <Label for="answer1">Answer</Label>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup floating>
                      <Input id="question2" name="question2" />
                      <Label for="question2">Question 2 </Label>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup floating>
                      <Input id="answer2" name="answer2" type="text" />
                      <Label for="answer2">Answer</Label>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup floating>
                      <Input id="question3" name="question3" />
                      <Label for="question3">Question 3 </Label>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup floating>
                      <Input id="answer3" name="answer3" type="text" />
                      <Label for="answer3">Answer</Label>
                    </FormGroup>
                  </Col>
                </Row>
                <div className="d-flex justify-content-end">
                  <Button color="primary">Submit</Button>
                  <Button
                    color="danger"
                    className="mx-3"
                    onClick={() => setShow((curr) => !curr)}
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
