import {
  Title,
  Text,
  Anchor,
  Image,
  Code,
  Container,
  SimpleGrid,
  Kbd,
  Card,
  Group,
  AppShell,
  ThemeIcon,
  Grid,
  Center,
  Header,
  Box,
} from '@mantine/core';
import React from 'react';
import useStyles from './HomePage.styles';
import { ArrowNarrowRight, BrandGithub } from 'tabler-icons-react';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

function FeatureCard(props) {
  const { classes } = useStyles();
  return (
    <Box
      component="div"
      p={20}
      sx={(theme) => {
        const bgInd = theme.colorScheme === 'dark' ? 9 : 1;
        const textColor =
          theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[8];
        return {
          backgroundColor: theme.colors[props.bg][bgInd],
          color: textColor,
          borderRadius: '12px',
          height: '100%',
        };
      }}
    >
      <Card sx={classes.card} withBorder>
        <Card.Section>
          <Center>
            <Title order={2} sx={classes.cardTitle} align="center">
              {props.title}
            </Title>
          </Center>
        </Card.Section>
        <Card.Section>
          <Center p={20}>
            <Text size="xl">{props.body}</Text>
          </Center>
        </Card.Section>
      </Card>
    </Box>
  );
}

export function HomePage() {
  const { classes } = useStyles();

  return (
    <AppShell
      padding={0}
      header={
        <Header height={60} fixed>
          <Group sx={{ height: '100%' }} px={20} position="apart">
            <Anchor href="https://github.com/constellate-org/constellate">
              <ThemeIcon color="gray" variant="outline" sx={{ border: 'none' }}>
                <BrandGithub />
              </ThemeIcon>
            </Anchor>
            <ColorSchemeToggle />
          </Group>
        </Header>
      }
    >
      <Container size="lg" mt={60}>
        <Title className={classes.title} align="center">
          <Text inherit variant="gradient" gradient={{ from: 'blue', to: 'teal' }} component="span">
            Constellate
          </Text>
          <br />
        </Title>
        <Title className={classes.subtitle} align="center" mb={50}>
          Publishing Rich Web Experiences from Jupyter Notebooks
        </Title>
      </Container>
      <Container fluid m={20}>
        <Grid>
          <Grid.Col span={5}>
            <Image src="/notebook-light.png" alt="Notebook" sx={classes.lightImg} />
            <Image src="/notebook-dark.png" alt="Notebook" sx={classes.darkImg} />
          </Grid.Col>
          <Grid.Col span={2}>
            <Center sx={{ height: '100%', marginBottom: 'auto', marginTop: 'auto' }}>
              <ThemeIcon
                variant="outline"
                color="blue"
                size={128}
                sx={{ border: 'none', height: '100%', marginBottom: 'auto', marginTop: 'auto' }}
              >
                <ArrowNarrowRight size={128} style={{ strokeWidth: '1px' }} />
              </ThemeIcon>
            </Center>
          </Grid.Col>
          <Grid.Col span={5}>
            <Image src="/constellate-light.png" alt="Notebook" sx={classes.lightImg} />
            <Image src="/constellate-dark.png" alt="Notebook" sx={classes.darkImg} />
          </Grid.Col>
        </Grid>
      </Container>
      <Container fluid py={100}>
        <Text align="center">
          <Title sx={classes.subtitle} mb={50}>
            Features
          </Title>
        </Text>
        <Grid justify="space-around">
          <Grid.Col span={3}>
            <FeatureCard
              title="More data, less web development"
              bg="blue"
              body="No need for separate Python and JS codebases. Just write the Python, and Constellate will handle the rest."
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <FeatureCard
              title="Supporting your favorite Python packages"
              bg="teal"
              body={
                <>
                  <>
                    Built-in support for <Code sx={classes.code}>matplotlib</Code>,{' '}
                    <Code sx={classes.code}>plotly</Code>, <Code sx={classes.code}>bokeh</Code>,{' '}
                    <Code sx={classes.code}>altair</Code>,<Code sx={classes.code}>pandas</Code>, and
                    more
                  </>
                </>
              }
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <FeatureCard
              title="Perfectly balanced, as all things should be"
              bg="indigo"
              body={
                <>
                  Premier support for dark mode, no effort required. (Even on this site!{' '}
                  <Kbd sx={classes.code}>D</Kbd> or <ColorSchemeToggle /> to toggle.)
                </>
              }
            />
          </Grid.Col>
        </Grid>
      </Container>
    </AppShell>
  );
}
