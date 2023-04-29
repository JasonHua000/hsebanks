import { Group, Text, ThemeIcon, UnstyledButton } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

type NavigationLinkProps = {
  label: string;
  icon: React.ReactNode;
  link: string;
};

const NavigationLink = ({ icon, label, link }: NavigationLinkProps) => {
  return (
    <UnstyledButton
      component={Link} // make the button a Link component that navigates to the specified link when clicked
      to={link}
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon variant="light" style={{backgroundColor: "transparent"}}>
          {icon} 
        </ThemeIcon>
        <Text size="lg">{label}</Text>
      </Group>
    </UnstyledButton>
  );
};

// export the component as the default export of this module
export default NavigationLink;
