<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import {
    Input,
    Icon,
    Label,
    Button,
    Segment,
    Divider
  } from '../../src/elements'
  import {
    Dropdown,
    DropdownMenu,
    DropdownItem,
    DropdownText
  } from '../../src/modules'
  import { Centerize } from '../components'
</script>

<Meta
  title="Elements/Input"
  component="{Input}"
/>

<Centerize>
  <Story name="Input">
    <p>A standard input</p>
    <br>
    <Input />
  </Story>

  <Story name="Icon">
    <p>An input can be formatted with an icon</p>
    <br>
    <Input icon placeholder="Search...">
      <Icon slot="right" name="search" />
    </Input>
  </Story>
  <Story name="Labeled">
    <p>An input can be formatted with a label</p>
    <br>
    <Input labeled placeholder="mysite.com">
      <Label slot="left">http://</Label>
    </Input>
    <br />
    <h4>Dropdown label</h4>
    <Input labeled="right" placeholder="Find domain">
      <Dropdown label slot="right">
        <DropdownText>.com</DropdownText>
        <Icon name="dropdown" />
        <DropdownMenu>
          <DropdownItem>.com</DropdownItem>
          <DropdownItem>.net</DropdownItem>
          <DropdownItem>.org</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Input>
    <br />
    <Input labeled="right" placeholder="Enter weight">
      <Label slot="right" basic>kg</Label>
    </Input>

    <br />
    <Input labeled="right" placeholder="Amount">
      <Label slot="left">$</Label>
      <Label slot="right" basic>.00</Label>
    </Input>

    <br />
    <Input labeled="right" icon="left" placeholder="Amount">
      <Icon name="tags" />
      <Label slot="right" tag>Add Tag</Label>
    </Input>

    <br />
    <Input labeled corner="left" placeholder="Amount">
      <Label slot="right" corner="left">
        <Icon name="asterisk" />
      </Label>
    </Input>

    <br />
    <Input labeled corner placeholder="Amount">
      <Label slot="right" corner>
        <Icon name="asterisk" />
      </Label>
    </Input>

    <br />
    <Input labeled placeholder="Find domain">
      <Label slot="left">I am</Label>
      <Dropdown as="select" selection slot="input">
        <option>Developer</option>
        <option>Software Engineer</option>
        <option>System admin</option>
        <option>Database Admin</option>
      </Dropdown>
    </Input>

    <br />
    <Input labeled="right" placeholder="Find domain">
      <Dropdown selection>
        <option>1-5</option>
        <option>6-10</option>
        <option>11-20</option>
        <option>21-50</option>
        <option>51-100</option>
      </Dropdown>
      <Label slot="right" basic>Persons</Label>
    </Input>
  </Story>

  <Story name="Action">
    <p>An input can be formatted to alert the user to an action they may perform</p>
    <br>
    <Input action placeholder="Search...">
      <Button slot="right">Search</Button>
    </Input>

    <br />
    <Input action value="$52.03">
      <Button slot="left" color="teal" labeled icon>
        <Icon name="cart" />
        Checkout
      </Button>
    </Input>

    <br />
    <Input action="right" icon="left" placeholder="Search">
      <Icon slot="left" name="search" />
      <Dropdown slot="right" basic floating button>
        <DropdownText>This page</DropdownText>
        <Icon name="dropdown" />
        <DropdownMenu>
          <DropdownItem>This Organization</DropdownItem>
          <DropdownItem>Entire Site</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Input>

    <br />
    <Input action placeholder="Search...">
      <svelte:fragment slot="right">
        <Dropdown slot="right" selection compact>
          <option value="all">All</option>
          <option selected value="articles"> Articles</option>
          <option value="products">Products</option>
        </Dropdown>
        <Button slot="right">Search</Button>
      </svelte:fragment>
    </Input>

    <br />
    <Input action value="http://ww.short.url/c0opq">
      <Button slot="right" color="teal" labeled="right" icon>
        <Icon name="copy" />
        Search
      </Button>
    </Input>

    <br />
    <Input action placeholder="Search...">
      <Button slot="right" icon>
        <Icon name="search" />
      </Button>
    </Input>
  </Story>

  <Story name="Transparent">
    <p>A transparent input has no background</p>
    <br>
    <Input transparent placeholder="Search..." />
    <br />
    <Input transparent icon placeholder="Search...">
      <Icon slot="right" name="search" />
    </Input>
    <br />
    <Input transparent icon="left" placeholder="Search...">
      <Icon slot="left" name="search" />
    </Input>
  </Story>

  <Story name="Inverted">
    <p>An input can be formatted to appear on dark backgrounds</p>
    <br>
    <Segment inverted>
      <Input inverted placeholder="Search..." />
      <Divider inverted />
      <Input inverted icon="left" placeholder="Search...">
        <Icon slot="left" name="search" />
      </Input>
      <Divider inverted />
      <Input inverted transparent icon placeholder="Search...">
        <Icon slot="right" name="search" />
      </Input>
    </Segment>
  </Story>

  <Story name="Fluid">
    <p>An input can take the size of its container</p>
    <br>
    <Input icon placeholder="Search a very wide input...">
      <Icon slot="right" name="search" />
    </Input>
    <br />
    <Input action placeholder="Search...">
      <Button slot="right">Search</Button>
    </Input>
  </Story>

  <Story name="Size">
    <p>An input can vary in size</p>
    <br>
    <Input size="mini" icon placeholder="Search small...">
      <Icon slot="right" name="search" />
    </Input>
    <br />
    <Input size="large" icon placeholder="Search large...">
      <Icon slot="right" name="search" />
    </Input>
    <br />
    <Input size="big" icon placeholder="Search big...">
      <Icon slot="right" name="search" />
    </Input>
    <br />
    <Input size="huge" icon placeholder="Search huge...">
      <Icon slot="right" name="search" />
    </Input>
    <br />
    <Input size="massive" icon placeholder="Search massive...">
      <Icon slot="right" name="search" />
    </Input>
    <br />
  </Story>

  <Story name="Textarea">
    <p>Using the input class you can also use some features on <code>textarea</code> as well</p>
    <br>
    <Input labeled corner="left" placeholder="Search small...">
      <Label slot="left" corner="left">
        <Icon name="asterisk" />
      </Label>
      <textarea> I have a left corner label</textarea>
    </Input>
  </Story>
</Centerize>
