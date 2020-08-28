module.exports = () => {
  return {
    visitor: {
      BinaryExpression: (path, ref) => {
        // console.log(ref.opts.operator) // *
        path.node.operator = ref.opts.operator
      }
    }
  }
}