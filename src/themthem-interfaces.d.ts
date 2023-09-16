interface GlobalDesignTokenBox {
  palette: {
    $values: ['white', 'black'];
    blue: {
      $values: ['light', 'dark'];
    };
    green: {
      $values: ['light', 'dark'];
    };
    red: {
      $values: ['light', 'dark'];
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
