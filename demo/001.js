const postcss = require('postcss')
const syntax = require('postcss-less')

const less = `
    // inline comment

    .container {
        .mixin-1();
        .mixin-2;
        .mixin-3 (@width: 100px) {
            width: @width;
        }
    }

    .rotation(@deg:5deg){
      .transform(rotate(@deg));
    }
`

postcss()
  .process(less, { syntax })
  .then((result) => {
    // will contain the value of `less`
    const { content } = result
    console.log('result', result)
  })
