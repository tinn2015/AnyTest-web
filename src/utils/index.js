export const getRandomColor = () => {
  let colors = ['magenta', '#ff7a45', 'volcano', 'volcano', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple', '#fadb14']
  let index = parseInt(Math.random()*10)
  return colors[index]
}