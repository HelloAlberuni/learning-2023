# Editorconfig

## Resources
- https://stackoverflow.com/questions/39343031/editorconfig-how-to-autofix-all-files-in-a-project 
- https://stackoverflow.com/questions/49228693/how-to-change-the-eol-for-all-files-from-crlf-to-lf

## Summary
- Used to work with multiple people with same project
- Needed to contribtue on opensource projects, for example WooCommerce
- There are 10 brace placement styles https://en.wikipedia.org/wiki/Indentation_style
- Mostly we use K&R style (Kernighan & Ritchie Style)
- The universal properties that can be used with editorconfig are available here https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties
- Available for all code editors including notepad++
- Editor config of WooCommerce available at https://github.com/woocommerce/woocommerce/blob/trunk/.editorconfig

- PHP extension by DEVSENSE
    - We can use wordpress coding standards using this extension
    - Make sure to `"editor.defaultFormatter": "DEVSENSE.phptools-vscode"` while using the PHP extension
    - When any features enabled/disable it is needed to formate the file to take effect
    - "editor.formatOnSave": true using this vscode setting we can formate the file each time on save the file
    - alternatively we can also formate the file manually using by
    - 1. Go to the command pallet using `cmp + p`
    - 2. Then type > to go to view the commands
    - 3. Then search for Format Document or `opt + shift + f`
    - When coding style = 'Wordpress' then this value should be false manually in the settings panel `"php.format.rules.openBraceOnNewLineForFunctions": false`