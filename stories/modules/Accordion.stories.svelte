<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import * as Accordion from '../../src/lib/modules/accordion'
  import Segment from '../../src/lib/elements/segment'
  import Icon from '../../src/lib/elements/icon'
</script>

<Meta title="Modules/Accordion" component="{Accordion.default}" />

<Story name="Primary" let:args>
  <Accordion.default {...args}>
    <Accordion.Content>
      <Accordion.Title slot="title">
        <Icon name="dropdown" />
        What is a dog?
      </Accordion.Title>
      <p>
        A dog is a type of domesticated animal. Known for its loyalty and
        faithfulness, it can be found as a welcome guest in many households
        across the world.
      </p>
    </Accordion.Content>

    <Accordion.Content>
      <Accordion.Title slot="title">
        <Icon name="dropdown" />
        What kinds of dogs are there?
      </Accordion.Title>
      <p>
        There are many breeds of dogs. Each breed varies in size and
        temperament. Owners often select a breed of dog that they find to be
        compatible with their own lifestyle and desires from a companion.
      </p>
    </Accordion.Content>

    <Accordion.Content>
      <Accordion.Title slot="title">
        <Icon name="dropdown" />
        How do you acquire a dog?
      </Accordion.Title>
      <p>
        Three common ways for a prospective owner to acquire a dog is from pet
        shops, private owners, or shelters.
      </p>
      <p>
        A pet shop may be the most convenient way to buy a dog. Buying a dog
        from a private owner allows you to assess the pedigree and upbringing of
        your dog before choosing to take it home. Lastly, finding your dog from
        a shelter, helps give a good home to a dog who may not find one so
        readily.
      </p>
    </Accordion.Content>
  </Accordion.default>
</Story>

<Story name="Inverted" let:args>
  <Segment inverted>
    <Accordion.default {...args} inverted>
      <Accordion.Content>
        <Accordion.Title slot="title">
          <Icon name="dropdown" />
          What is a dog?
        </Accordion.Title>
        <p>
          A dog is a type of domesticated animal. Known for its loyalty and
          faithfulness, it can be found as a welcome guest in many households
          across the world.
        </p>
      </Accordion.Content>

      <Accordion.Content>
        <Accordion.Title slot="title">
          <Icon name="dropdown" />
          What kinds of dogs are there?
        </Accordion.Title>
        <p>
          There are many breeds of dogs. Each breed varies in size and
          temperament. Owners often select a breed of dog that they find to be
          compatible with their own lifestyle and desires from a companion.
        </p>
      </Accordion.Content>

      <Accordion.Content>
        <Accordion.Title slot="title">
          <Icon name="dropdown" />
          How do you acquire a dog?
        </Accordion.Title>
        <p>
          Three common ways for a prospective owner to acquire a dog is from pet
          shops, private owners, or shelters.
        </p>
        <p>
          A pet shop may be the most convenient way to buy a dog. Buying a dog
          from a private owner allows you to assess the pedigree and upbringing
          of your dog before choosing to take it home. Lastly, finding your dog
          from a shelter, helps give a good home to a dog who may not find one
          so readily.
        </p>
      </Accordion.Content>
    </Accordion.default>
  </Segment>
</Story>
