## ColumnsJS aka cALumnsJS
*A plugin for creating columns*

### Use

Call the plugin on the parent element of the list items.

### Demo

http://codepen.io/foxareld/pen/KgPKAv?editors=0010#0

### Example:

**HTML**
```
<ul class='my-list'>
 <li>Item 1</li>
 <li>Item 2</li>
 <li>Item 3</li>
</ul>


<div class='my-alt-list'>
 <span>Item 1</span>
 <span>Item 2</span>
 <span>Item 3</span>
 <span>Item 4</span>
 <span>Item 5</span>
 <span>Item 6</span>
</div>
```

**Javascript**
```
$(".my-list").columns({
 columns: 2                      
});

$(".my-alt-list").columns({
 columns: 3                      
});
```

### Options:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| columns | integer | 2 | Number of columns to be made |
| breakAt | integer | 0 | create columns if more than 'breakAt' number of items |
| itemsInColumn | boolean | false | if true, 'columns' becomes number of items in each column |
| addWrapper | boolean | false | if true, adds wraps columns with html specified in 'wrapper' |
| wrapper | string (html / jQuery selector) | ```<div class='col-wrap' />``` | wraps column with this element when 'addWrapper' is true |
