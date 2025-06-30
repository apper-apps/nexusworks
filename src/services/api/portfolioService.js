import portfolioData from '@/services/mockData/portfolio.json'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const getPortfolioItems = async () => {
  await delay(400)
  return [...portfolioData]
}

export const getPortfolioItemById = async (id) => {
  await delay(200)
  const item = portfolioData.find(p => p.Id === parseInt(id))
  if (!item) {
    throw new Error('Portfolio item not found')
  }
  return { ...item }
}

export const createPortfolioItem = async (itemData) => {
  await delay(450)
  const maxId = Math.max(...portfolioData.map(p => p.Id), 0)
  const newItem = {
    ...itemData,
    Id: maxId + 1
  }
  portfolioData.push(newItem)
  return { ...newItem }
}

export const updatePortfolioItem = async (id, itemData) => {
  await delay(350)
  const index = portfolioData.findIndex(p => p.Id === parseInt(id))
  if (index === -1) {
    throw new Error('Portfolio item not found')
  }
  portfolioData[index] = { ...portfolioData[index], ...itemData }
  return { ...portfolioData[index] }
}

export const deletePortfolioItem = async (id) => {
  await delay(250)
  const index = portfolioData.findIndex(p => p.Id === parseInt(id))
  if (index === -1) {
    throw new Error('Portfolio item not found')
  }
  const deletedItem = { ...portfolioData[index] }
  portfolioData.splice(index, 1)
  return deletedItem
}