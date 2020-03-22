import React,{Component} from 'react';
import "semantic-ui-css/semantic.min.css";
import {Segment, Grid, Divider, Header, Icon, Search, Button, Dimmer, Loader, Placeholder, List, Table, Label, Container, Menu, Feed, Comment, Form } from "semantic-ui-react";

const style={
  segment1:{
    padding:"2em 0 0 0",
  }
}

class App extends Component{
  render(){
    return(
      <div>
        <Container style={style.segment1}>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="2" textAlign="right">
                  <Search placeholder="Search document..."/>
                </Table.HeaderCell>
              </Table.Row>
              <Table.Row textAlign="center">
                <Table.HeaderCell>Nama Document</Table.HeaderCell>
                <Table.HeaderCell>Jenis File</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Label ribbon><p color="black">Panduan Belajar Javascript</p></Label>
                </Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar CSS</Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar React JS</Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="3">
                  <Menu floated="right" pagination>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron left"/>
                    </Menu.Item>
                    <Menu.Item as="a">1</Menu.Item>
                    <Menu.Item as="a">2</Menu.Item>
                    <Menu.Item as="a">3</Menu.Item>
                    <Menu.Item as="a">4</Menu.Item>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron right"/>
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Container>

        <br/><br/>

        <Grid container>
          <Grid.Row colums={2}>
            <Grid.Column width={10}>
              <Comment.Group threaded>
                <Header as="h3" dividing>
                  Commentar
                </Header>
                <Comment>
                  <Comment.Avatar as="a" src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"/>
                  <Comment.Content>
                    <Comment.Author as="a">Satria</Comment.Author>
                    <Comment.Metadata>
                      <span>Today at 5:42PM</span>
                    </Comment.Metadata>
                    <Comment.Text>Hallo..!!</Comment.Text>
                    <Comment.Actions>
                      <a>Reply</a>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>

                <Comment>
                  <Comment.Avatar as="a" src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"/>
                  <Comment.Content>
                    <Comment.Author as="a">Danang</Comment.Author>
                    <Comment.Metadata>
                      <span>Today at 5:50PM</span>
                    </Comment.Metadata>
                    <Comment.Text>
                      <p>Kerjakan Sesuatu Semampu Kamu..</p>
                    </Comment.Text>
                    <Comment.Actions>
                      <a>Reply</a>
                    </Comment.Actions>
                  </Comment.Content>

                  <Comment.Group>
                    <Comment>
                      <Comment.Avatar as="a" src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"/>
                      <Comment.Content>
                        <Comment.Author as="a">Ricky</Comment.Author>
                        <Comment.Metadata>
                          <span>Just Now</span>
                        </Comment.Metadata>
                        <Comment.Text>Kamu Sekarang Dimana Danang?</Comment.Text>
                        <Comment.Actions>
                          <a>Reply</a>
                        </Comment.Actions>
                      </Comment.Content>
                    </Comment>
                  </Comment.Group>
                </Comment>

                <Comment>
                  <Comment.Avatar as="a" src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"/>
                  <Comment.Content>
                    <Comment.Author as="a">Joe</Comment.Author>
                    <Comment.Metadata>
                      <span>1 days ago</span>
                    </Comment.Metadata>
                    <Comment.Text>Terimakasih Atas Nasihat Nya</Comment.Text>
                    <Comment.Actions>
                      <a>Reply</a>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>

                <Form reply>
                  <Form.TextArea />
                  <Button content="Add Reply" labelPosition="left" icon="edit" primary />
                </Form>
              </Comment.Group>
            </Grid.Column>
            <Grid.Column width={4}>
              <Feed>
                <Feed.Event>
                  <Feed.Label>
                    <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                  </Feed.Label>
                  <Feed.Content>
                    <Feed.Summary>
                      <Feed.User>Anton</Feed.User> added you as a friend
                      <Feed.Date>3 Hour Age</Feed.Date>
                    </Feed.Summary>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name="like" />4 Likes
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>
                <Feed.Event>
                  <Feed.Label icon="pencil" />
                  <Feed.Content>
                    <Feed.Summary>
                      You submitted a new post to the page
                      <br/>
                      <Feed.Date>3 days ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra text>
                      Saya Senang Belajar Bahasa Pemograman
                    </Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like>11 Likes</Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/helen.jpg"/>
                  <Feed.Content>
                    <Feed.Date>4 days ago</Feed.Date>
                    <Feed.Summary>
                      David added 2 new Image
                    </Feed.Summary>
                    <Feed.Extra images>
                      <a>
                        <img src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png "/>
                      </a>
                      <a>
                        <img src="https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png"/>
                      </a>
                    </Feed.Extra>
                    <Feed.Meta like="2 Likes"/>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br/><br/>
      </div>
    )
  }
}

export default App;
