interface GlobalDesignTokenBox {
  palette: {
    $values: ['white', 'black'];
    blue: {
      $modifiers: ['light', 'dark'];
    };
    green: {
      $modifiers: ['light', 'dark'];
    };
    red: {
      $modifiers: ['light', 'dark'];
    };
  };
  variants: {
    primary: {
      background: {
        $modifiers: ['hover'];
      };
      text: {
        $modifiers: ['hover'];
      };
    };
    secondary: {
      background: {
        $modifiers: ['hover'];
      };
      text: {
        $modifiers: ['hover'];
      };
    };
    error: {
      background: {
        $modifiers: ['hover'];
      };
      text: {
        $modifiers: ['hover'];
      };
    };
  };
}
