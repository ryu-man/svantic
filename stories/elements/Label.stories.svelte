<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import * as Label from '../../src/elements/label'
  import Icon from '../../src/elements/icon'
  import Image from '../../src/elements/image'
  import Form from '../../src/collections/form'
  import { Centerize } from '../components'
  import { Row } from 'svelte-layouts'
</script>

<Meta title="Elements/Label" component="{Label.default}" />

<Centerize>
  <Story name="label">
    <p>A label</p>
    <br />
    <Label.default>
      <Icon name="mail" />
      23
    </Label.default>
  </Story>
  <Story name="image">
    <p>A label can be formatted to emphasize an image</p>
    <br />
    <Row>
      <Label.default image>
        <img src="https://semantic-ui.com/images/avatar/small/joe.jpg" />
        Joe
      </Label.default>
      <Label.default image>
        <img src="https://semantic-ui.com/images/avatar/small/elliot.jpg" />
        Elliot
      </Label.default>
      <Label.default image>
        <img src="https://semantic-ui.com/images/avatar/small/stevie.jpg" />
        Stevie
      </Label.default>
    </Row>
    <br />
    <Row>
      <Label.default image color="blue">
        <img src="https://semantic-ui.com/images/avatar/small/veronika.jpg" />
        Veronika
        <div class="detail">Friend</div>
      </Label.default>
      <Label.default image color="teal">
        <img src="https://semantic-ui.com/images/avatar/small/jenny.jpg" />
        Veronika
        <div class="detail">Student</div>
      </Label.default>
      <Label.default image color="yellow">
        <img src="https://semantic-ui.com/images/avatar/small/christian.jpg" />
        Helen
        <div class="detail">Co-worker</div>
      </Label.default>
    </Row>
    <br />
    <Row>
      <Label.default image>
        <img src="https://semantic-ui.com/images/avatar/small/ade.jpg" />
        Adrienne
        <Icon name="delete" />
      </Label.default>
      <Label.default image>
        <img src="https://semantic-ui.com/images/avatar/small/zoe.jpg" />
        Zoe
        <Icon name="delete" />
      </Label.default>
      <Label.default image>
        <img src="https://semantic-ui.com/images/avatar/small/nan.jpg" />
        Nan
        <Icon name="delete" />
      </Label.default>
    </Row>
  </Story>

  <Story name="pointing">
    <Form fluid>
      <div class="field">
        <input type="text" placeholder="First name" />
        <Label.default pointing>Please enter a value</Label.default>
      </div>
      <div class="ui divider"></div>
      <div class="field" placeholder="Last Name">
        <Label.default pointing="below">Please enter a value</Label.default>
        <input type="text" />
      </div>
      <div class="ui divider"></div>
      <div class="inline field">
        <input type="text" placeholder="Username" />
        <Label.default pointing="left">That name is taken!</Label.default>
      </div>
      <div class="ui divider"></div>
      <div class="inline field">
        <Label.default pointing="right">
          Your password must be 6 characters or more
        </Label.default>
        <input type="password" />
      </div>
    </Form>
  </Story>

  <Story name="corner">
    <div class="ui two column grid">
      <div class="column">
        <Image fluid src="https://semantic-ui.com/images/wireframe/image.png">
          <Label.default corner="left">
            <Icon name="heart" />
          </Label.default>
        </Image>
      </div>
      <div class="column">
        <Image fluid src="https://semantic-ui.com/images/wireframe/image.png">
          <Label.default corner="right" color="red">
            <Icon name="save" />
          </Label.default>
        </Image>
      </div>
    </div>
  </Story>

  <Story name="tag">
    <Row gap="1em">
      <Label.default tag>New</Label.default>
      <Label.default tag color="red">Upcoming</Label.default>
      <Label.default tag color="teal">Featured</Label.default>
    </Row>
  </Story>

  <Story name="ribbon">
    <div class="ui two column grid">
      <div class="column">
        <div class="ui raised segment">
          <a class="ui red ribbon label">Overview</a>
          <span>Account Details</span>
          <p></p>
          <a class="ui blue ribbon label">Community</a> User Reviews
          <p></p>
        </div>
      </div>
      <div class="column">
        <div class="ui segment">
          <a class="ui orange right ribbon label">Specs</a>
          <p></p>
          <a class="ui teal right ribbon label">Reviews</a>
          <p></p>
        </div>
      </div>
    </div>
  </Story>

  <Story name="attached">
    <div class="ui top attached label">HTML</div>
    <div class="ui bottom attached label">CSS</div>
    <div class="ui top right attached label">Code</div>
    <div class="ui top left attached label">View</div>
    <div class="ui bottom left attached label">User View</div>
    <div class="ui bottom right attached label">Admin View</div>
  </Story>

  <Story name="horizontal">
    <div class="ui divided selection list">
      <a class="item">
        <div class="ui red horizontal label">Fruit</div>
        Kumquats
      </a>
      <a class="item">
        <div class="ui purple horizontal label">Candy</div>
        Ice Cream
      </a>
      <a class="item">
        <div class="ui red horizontal label">Fruit</div>
        Orange
      </a>
      <a class="item">
        <div class="ui horizontal label">Dog</div>
        Poodle
      </a>
    </div>
  </Story>
</Centerize>
