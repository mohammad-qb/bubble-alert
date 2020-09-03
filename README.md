# Bubble Alert

Get a beautiful alert for info, success and error events

# Installation

`npm i bubble-alert --save`

Then...

```
import {bubbleAlert} from "bubble-alert";

bubbleAlert({
    type: "info",
    text: "Hello, World!"
})

```

## Options

bubbleAlert supports 2 options, both of which are optional:

- _type_ - _info / error / success_ (Defaults to info)
- _text_ - _string_ (Defaults to Hello, World!)
