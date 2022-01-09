<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import { Centerize } from '../components'
  import * as Button from '../../src/elements/button'
  import Label from '../../src/elements/label'
  import Icon from '../../src/elements/icon'
  import Segment from '../../src/elements/segment'
  import { Row, Col } from 'svelte-layouts'
</script>

<Meta title="Elements/Button" component="{Button}" />

<Centerize>
  <Story name="Button">
    <p>A standard button

    </p>
    <br>
    <Row>
      <Button.default>Follow</Button.default>
      <Button.default>Button</Button.default>
      <Button.default tabIndex="{0}">Focusable</Button.default>
    </Row>
  </Story>

  <Story name="Emphasis">
    <p>A button can be formatted to show different levels of emphasis</p>
    <br>
    <div>
      <Button.default primary>Save</Button.default>
      <Button.default>Discard</Button.default>
    </div>
    <br />
    <div>
      <Button.default secondary>Okay</Button.default>
      <Button.default>Cancel</Button.default>
    </div>
  </Story>

  <Story name="Animated">
    <p>A button can animate to show hidden content</p>
    <br>
    <div class="row">
      <Button.default animated tabIndex="{0}">
        <Button.Content>Next</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button.default>

      <Button.default animated="vertical" tabIndex="{0}">
        <Button.Content hidden>Shop</Button.Content>
        <Button.Content>
          <Icon name="shop" />
        </Button.Content>
      </Button.default>

      <Button.default animated="fade" tabIndex="{0}">
        <Button.Content>Sign-up for a Pro account</Button.Content>
        <Button.Content hidden>$12.99 a month</Button.Content>
      </Button.default>
    </div>
  </Story>

  <Story name="Labeled">
    <p>A button can appear alongside a label</p>
    <br>
    <Row>
      <Button.default labeled tabIndex="0">
        <Button.default>
          <Icon name="heart" /> Like
        </Button.default>
        <Label basic>2,048</Label>
      </Button.default>

      <Button.default labeled="left" tabIndex="0">
        <Label basic pointing="right">2,048</Label>
        <Button.default>
          <Icon name="heart" /> Like
        </Button.default>
      </Button.default>

      <Button.default labeled="left" tabIndex="0">
        <Label basic>1,048</Label>
        <Button.default>
          <Icon name="fork" /> Like
        </Button.default>
      </Button.default>
    </Row>
  </Story>

  <Story name="Icon">
    <p>A button can have only an icon</p>
    <br>
    <Button.default icon>
      <Icon name="cloud" />
    </Button.default>
  </Story>

  <Story name="Labeled icon">
    <p>A button can use an icon as a label</p>
    <br>
    <Row>
      <Button.default labeled icon>
        <Icon name="pause" />
        Pause
      </Button.default>
      <Button.default labeled="right" icon>
        Next
        <Icon name="arrow right" />
      </Button.default>
    </Row>
  </Story>

  <Story name="Basic">
    <p>A basic button is less pronounced</p>
    <br>
    <Button.default basic>
      <Icon name="user" />
      Add Friend
    </Button.default>
    <br />
    <Row>
      <Button.default basic color="primary">Primary</Button.default>
      <Button.default basic color="secondary">Secondary</Button.default>
      <Button.default basic color="positive">Positive</Button.default>
      <Button.default basic color="negative">Negative</Button.default>
    </Row>
    <br />
    <Row>
      <Button.default basic color="red">Red</Button.default>
      <Button.default basic color="orange">Orange</Button.default>
      <Button.default basic color="yellow">Yellow</Button.default>
      <Button.default basic color="olive">Olive</Button.default>
      <Button.default basic color="green">Green</Button.default>
      <Button.default basic color="teal">Teal</Button.default>
      <Button.default basic color="blue">Blue</Button.default>
      <Button.default basic color="violet">Violet</Button.default>
      <Button.default basic color="purple">Purple</Button.default>
      <Button.default basic color="pink">Pink</Button.default>
      <Button.default basic color="brown">Brown</Button.default>
      <Button.default basic color="grey">Grey</Button.default>
      <Button.default basic color="black">Black</Button.default>
    </Row>
  </Story>

  <Story name="Tetiary">
    <p>An none bordered less important button</p>
    <Row>
      <Button.default tertiary color="red">Red</Button.default>
      <Button.default tertiary color="orange">Orange</Button.default>
      <Button.default tertiary color="yellow">Yellow</Button.default>
      <Button.default tertiary color="olive">Olive</Button.default>
      <Button.default tertiary color="green">Green</Button.default>
      <Button.default tertiary color="teal">Teal</Button.default>
      <Button.default tertiary color="blue">Blue</Button.default>
      <Button.default tertiary color="violet">Violet</Button.default>
      <Button.default tertiary color="purple">Purple</Button.default>
      <Button.default tertiary color="pink">Pink</Button.default>
      <Button.default tertiary color="brown">Brown</Button.default>
      <Button.default tertiary color="grey">Grey</Button.default>
      <Button.default tertiary color="black">Black</Button.default>
    </Row>
  </Story>

  <Story name="Inverted">
    <p>A button can be formatted to appear on dark backgrounds</p>
    <br>
    <Segment inverted>
      <Row>
        <Button.default inverted color="red">Red</Button.default>
        <Button.default inverted color="orange">Orange</Button.default>
        <Button.default inverted color="yellow">Yellow</Button.default>
        <Button.default inverted color="olive">Olive</Button.default>
        <Button.default inverted color="green">Green</Button.default>
        <Button.default inverted color="teal">Teal</Button.default>
        <Button.default inverted color="blue">Blue</Button.default>
        <Button.default inverted color="violet">Violet</Button.default>
        <Button.default inverted color="purple">Purple</Button.default>
        <Button.default inverted color="pink">Pink</Button.default>
        <Button.default inverted color="brown">Brown</Button.default>
        <Button.default inverted color="grey">Grey</Button.default>
        <Button.default inverted color="black">Black</Button.default>
      </Row>
    </Segment>
  </Story>

  <Story name="Groups">
    <h3>Buttons</h3>
    <p>Buttons can exist together as a group</p>
    <br>
    <Button.Group>
      <Button.default>One</Button.default>
      <Button.default>Two</Button.default>
      <Button.default>Three</Button.default>
    </Button.Group>
    <br />
    <h3>Icon Buttons</h3>
    <p>Button groups can show groups of icon</p>
    <br>
    <Row gap="1em">
      <Button.Group icon>
        <Button.default>
          <Icon name="align left" />
        </Button.default>
        <Button.default>
          <Icon name="align center" />
        </Button.default>
        <Button.default>
          <Icon name="align right" />
        </Button.default>
      </Button.Group>

      <Button.Group icon>
        <Button.default>
          <Icon name="bold" />
        </Button.default>
        <Button.default>
          <Icon name="underline" />
        </Button.default>
        <Button.default>
          <Icon name="text width" />
        </Button.default>
      </Button.Group>
    </Row>
  </Story>

  <Story name="Conditionals">
    <p>Button groups can contain conditionals</p>
    <br>
    <Button.Group>
      <Button.default>Cancel</Button.default>
      <Button.Or />
      <Button.default>Save</Button.default>
    </Button.Group>
  </Story>

  <Story name="States">
    <h3>Active</h3>
    <p>A button can show it is currently the active user selection</p>
    <br>
    <Button.default active>
      <Icon name="user" />
      Fellow
    </Button.default>
    <br />
    <h3>Disabled</h3>
    <p>A button can show it is currently unable to be interacted with</p>
    <br>
    <Button.default disabled>
      <Icon name="user" />
      Fellow
    </Button.default>
    <h3>Loading</h3>
    <p>A button can show a loading indicator</p>
    <br>
    <Col>
      <Row>
        <Button.default loading>Loading</Button.default>
        <Button.default loading basic>Loading</Button.default>
        <Button.default loading primary>Loading</Button.default>
        <Button.default loading secondary>Loading</Button.default>
      </Row>
      <Row>
        <Button.default loading="double">Loading</Button.default>
        <Button.default loading="double" basic>Loading</Button.default>
        <Button.default loading="double" primary>Loading</Button.default>
        <Button.default loading="double" secondary>Loading</Button.default>
      </Row>
      <Row>
        <Button.default loading="elastic">Loading</Button.default>
        <Button.default loading="elastic" basic>Loading</Button.default>
        <Button.default loading="elastic" primary>Loading</Button.default>
        <Button.default loading="elastic" secondary>Loading</Button.default>
      </Row>
    </Col>
  </Story>
  <Story name="Social">
    <p>A button can be formatted to link to a social website</p>
    <br>
    <Row wrap="wrap" justifyContent="center">
      <Button.default social="facebook">
        <Icon name="facebook" />
        Facebook
      </Button.default>
      <Button.default social="twitter">
        <Icon name="twitter" />
        Twitter
      </Button.default>
      <Button.default social="google plus">
        <Icon name="google plus" />
        Google Plus
      </Button.default>
      <Button.default social="vk">
        <Icon name="vk" />
        VK
      </Button.default>
      <Button.default social="linkedin">
        <Icon name="linkedin" />
        LinkedIn
      </Button.default>
      <Button.default social="instagram">
        <Icon name="instagram" />
        Instagram
      </Button.default>
      <Button.default social="youtube">
        <Icon name="youtube" />
        Youtube
      </Button.default>
      <Button.default social="whatsapp">
        <Icon name="whatsapp" />
        WhatsApp
      </Button.default>
      <Button.default social="telegram">
        <Icon name="telegram" />
        Telegram
      </Button.default>
    </Row>
  </Story>

  <Story name="Size">
    <p>A button can have different sizes</p>
    <br>
    <Row wrap="wrap" alignItems="flex-start">
      <Button.default size="mini">Mini</Button.default>
      <Button.default size="tiny">Tiny</Button.default>
      <Button.default size="small">Small</Button.default>
      <Button.default size="medium">Medium</Button.default>
      <Button.default size="large">Large</Button.default>
      <Button.default size="big">Big</Button.default>
      <Button.default size="huge">Huge</Button.default>
      <Button.default size="massive">Massive</Button.default>
    </Row>
  </Story>
  <Story name="Floated">
    <p>A button can be aligned to the left or right of its container</p>
    <br>
    <div style="width: 100%;">
      <Button.default floated>Left Floated</Button.default>
      <Button.default floated="right">Right Floated</Button.default>
    </div>
  </Story>
  <Story name="Colored">
    <p>A button can have different colors</p>
    <br>
    <Row justifyContent="center" wrap="wrap">
      <Button.default color="red">Red</Button.default>
      <Button.default color="orange">Orange</Button.default>
      <Button.default color="yellow">Yellow</Button.default>
      <Button.default color="olive">Olive</Button.default>
      <Button.default color="green">Green</Button.default>
      <Button.default color="teal">Teal</Button.default>
      <Button.default color="blue">Blue</Button.default>
      <Button.default color="violet">Violet</Button.default>
      <Button.default color="purple">Purple</Button.default>
      <Button.default color="pink">Pink</Button.default>
      <Button.default color="brown">Brown</Button.default>
      <Button.default color="grey">Grey</Button.default>
      <Button.default color="black">Black</Button.default>
    </Row>
  </Story>

  <Story name="Compact">
    <p>A button can reduce its padding to fit into tighter spaces</p>
    <br>
    <Row>
      <Button.default compact>Hold</Button.default>
      <Button.default compact>
        <Icon name="pause" />
      </Button.default>
      <Button.default compact>
        <Icon name="pause" />
        Pause
      </Button.default>
    </Row>
  </Story>

  <Story name="Toggle">
    <p>A button can be formatted to toggle on and off</p>
    <br>
    <Button.default as="button" toggle>Vote</Button.default>
  </Story>

  <Story name="Positive">
    <p>A button can hint towards a positive consequence</p>
    <br>
    <Button.default positive>Positive</Button.default>
  </Story>

  <Story name="Negative">
    <p>A button can hint towards a negative consequence</p>
    <br>
    <Button.default negative>Negative</Button.default>
  </Story>

  <Story name="Fluid">
    <p>A button can take the width of its container</p>
    <br>
    <Button.default fluid>Fits container</Button.default>
  </Story>

  <Story name="Circular">
    <p>A button can be circular</p>
    <br>
    <Button.default circular icon>
      <Icon name="settings" />
    </Button.default>
    <br />
    <Row>
      <Button.default social="facebook" circular icon>
        <Icon name="facebook" />
      </Button.default>
      <Button.default social="twitter" circular icon>
        <Icon name="twitter" />
      </Button.default>
      <Button.default social="linkedin" circular icon>
        <Icon name="linkedin" />
      </Button.default>
      <Button.default social="google plus" circular icon>
        <Icon name="google" />
      </Button.default>
    </Row>
  </Story>

  <Story name="Vertically Attached">
    <p>A button can be attached to the top or bottom of other content</p>
    <br>
    <div>
      <Button.default attached="top">Top</Button.default>
      <Segment attached>
        <p>
          orem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis
          faucibus magna. Aliquam erat volutpat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Duis vel faucibus libero. Pellentesque
          posuere velit sit amet nisi venenatis vehicula a ac odio. Vivamus
          commodo tortor vel neque laoreet, nec sollicitudin tortor viverra.
          Suspendisse sed justo et sapien aliquet vehicula. Aliquam erat
          volutpat. Quisque congue sem dapibus eros elementum vulputate. Donec
          sollicitudin erat ante, at consequat ex fermentum non. Fusce
          hendrerit, eros at ornare luctus, ipsum magna pulvinar arcu, non
          lobortis urna metus non sem. Nam et magna tellus. Curabitur mauris
          tortor, laoreet ut auctor eu, pretium et justo. Nulla ornare arcu
          semper dui facilisis congue.
        </p>
      </Segment>
      <Button.default attached="bottom">Bottom</Button.default>
    </div>
  </Story>

  <Story name="Horizontally Attached">
    <p>A button can be attached to the left or right of other content</p>
    <br>
    <div>
      <Button.default attached="left">Left</Button.default>
      <Button.default attached="right">Right</Button.default>
    </div>
  </Story>

  <Story name="Vertical Buttons">
    <Button.Group vertical>
      <Button.default>Feed</Button.default>
      <Button.default>Messages</Button.default>
      <Button.default>Events</Button.default>
      <Button.default>Photos</Button.default>
    </Button.Group>
  </Story>

  <Story name="Stackable Buttons">
    <Button.Group stackable>
      <Button.default>Feed</Button.default>
      <Button.default>Messages</Button.default>
      <Button.default>Events</Button.default>
      <Button.default>Photos</Button.default>
    </Button.Group>
  </Story>

  <Story name="Icon Buttons">
    <Button.Group icon>
      <Button.default>
        <Icon name="play" />
      </Button.default>
      <Button.default>
        <Icon name="pause" />
      </Button.default>
      <Button.default>
        <Icon name="shuffle" />
      </Button.default>
    </Button.Group>
  </Story>

  <Story name="Labeled Icon Buttons">
    <Button.Group icon labeled vertical>
      <Button.default>
        <Icon name="pause" />
        Pause
      </Button.default>
      <Button.default>
        <Icon name="play" />
        Play
      </Button.default>
      <Button.default>
        <Icon name="shuffle" />
        Shuffle
      </Button.default>
    </Button.Group>
  </Story>

  <Story name="Mixed Group">
    <p>Groups can be formatted to use multiple button types together</p>
    <br>
    <Button.Group>
      <Button.default labeled icon>
        <Icon name="chevron left" />
        Back
      </Button.default>
      <Button.default>
        <Icon name="stop" />
        Stop
      </Button.default>
      <Button.default labeled="right" icon>
        Forward
        <Icon name="chevron right" />
      </Button.default>
    </Button.Group>
  </Story>

  <Story name="Equal Width">
    <p>Groups can have their widths divided evenly</p>
    <br>
    <Button.Group width="five">
      <Button.default>Overview</Button.default>
      <Button.default>Specs</Button.default>
      <Button.default>Warranty</Button.default>
      <Button.default>Review</Button.default>
      <Button.default>Support</Button.default>
    </Button.Group>
    <br />
    <Button.Group width="three">
      <Button.default>Overview</Button.default>
      <Button.default>Specs</Button.default>
      <Button.default>Support</Button.default>
    </Button.Group>
  </Story>

  <Story name="Colored Buttons">
    <p>Groups can have a shared color</p>
    <br>
    <Button.Group color="blue">
      <Button.default>One</Button.default>
      <Button.default>Two</Button.default>
      <Button.default>Three</Button.default>
    </Button.Group>
  </Story>

  <Story name="Basic Buttons">
    <p>A button group can be less pronounced</p>
    <br>
    <Col gap="1em" alignItems="center">
      <Button.Group basic>
        <Button.default>One</Button.default>
        <Button.default>Two</Button.default>
        <Button.default>Three</Button.default>
      </Button.Group>
      <Button.Group basic vertical>
        <Button.default>One</Button.default>
        <Button.default>Two</Button.default>
        <Button.default>Three</Button.default>
      </Button.Group>
      <Button.Group>
        <Button.default basic color="red">One</Button.default>
        <Button.default basic color="blue">Two</Button.default>
        <Button.default basic color="green">Three</Button.default>
      </Button.Group>
    </Col>
  </Story>

  <Story name="Group Sizes">
    <p>Groups can have a shared size</p>
    <br />
    <Button.Group size="large">
      <Button.default>One</Button.default>
      <Button.default>Two</Button.default>
      <Button.default>Three</Button.default>
    </Button.Group>
    <br />
    <Button.Group size="small">
      <Button.default basic icon><Icon name="file" /></Button.default>
      <Button.default basic icon><Icon name="save" /></Button.default>
      <Button.default basic icon><Icon name="upload" /></Button.default>
      <Button.default basic icon><Icon name="download" /></Button.default>
    </Button.Group>
    <br>
    <Button.Group size="large">
      <Button.default>One</Button.default>
      <div class="or"/>
      <Button.default>Two</Button.default>
    </Button.Group>
  </Story>
</Centerize>

<style>
  :global(#root) {
    height: 100%;
  }
  :global(.row.layout > *) {
    margin-bottom: 4px;
  }
  .row {
    display: flex;
    gap: 1em;
  }
</style>
