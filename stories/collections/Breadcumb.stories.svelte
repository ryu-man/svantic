<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import {Breadcrumb} from "../../src/collections";
  </script>
  
  <Meta
    title="Example/Breadcrumb"
    component={Breadcrumb}
    argTypes={{
      label: { control: "text" },
      primary: { control: "boolean" },
      backgroundColor: { control: "color" },
      size: {
        control: { type: "select", options: ["small", "medium", "large"] },
      },
      onClick: { action: "onClick" },
    }}
  />
  
  <Template let:args>
    <Breadcrumb {...args} on:click={args.onClick} />
  </Template>
  
  <Story
    name="Primary"
    args={{
      primary: true,
      label: "Button",
    }}
  />
  
  <Story
    name="Secondary"
    args={{
      label: "Button",
    }}
  />
  <Story
    name="Large"
    args={{
      size: "large",
      label: "Button",
    }}
  />
  
  <Story
    name="Small"
    args={{
      size: "small",
      label: "Button",
    }}
  />
  