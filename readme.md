# Aids
> MaKeS eVeRy OtHeR lEtTeR cApItaLiZeD.

![aids is missing](https://cdn.discordapp.com/attachments/230784366790443008/245368585705226241/unknown.png)

```js
var aids = require('aids')

aids('hello world')
// => 'HeLlO wOrLd'

aids('hello world', true)
// => 'hElLo WoRlD'
```

## Installation

Install aids into your project

```npm
npm install --save aids
```

## Usage

### `aids(source, [offset])`

Turn the source into alternating capital and lowercase letters.

#### Parameters

 - `source` (`String`): The source you want to turn into aids text.
 - `offset` (`Boolean`): Start capitalizing on the second letter.

#### Example

```js
aids('hello world')
// => 'HeLlO wOrLd'

aids('hello world', true)
// => 'hElLo WoRlD'
```

## License

Do whatever you want.
