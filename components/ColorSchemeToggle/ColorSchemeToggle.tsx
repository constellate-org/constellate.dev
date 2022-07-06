import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  useHotkeys([['D', () => toggleColorScheme()]]);

  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      size="xl"
      sx={(theme) => ({
        border: 'none',
        display: 'inline-block',
      })}
      variant="outline"
    >
      {colorScheme === 'dark' ? (
        <SunIcon width={20} height={20} />
      ) : (
        <MoonIcon width={20} height={20} />
      )}
    </ActionIcon>
  );
}
