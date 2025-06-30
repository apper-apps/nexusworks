import teamData from '@/services/mockData/team.json'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const getTeamMembers = async () => {
  await delay(350)
  return [...teamData]
}

export const getTeamMemberById = async (id) => {
  await delay(200)
  const member = teamData.find(t => t.Id === parseInt(id))
  if (!member) {
    throw new Error('Team member not found')
  }
  return { ...member }
}

export const createTeamMember = async (memberData) => {
  await delay(400)
  const maxId = Math.max(...teamData.map(t => t.Id), 0)
  const newMember = {
    ...memberData,
    Id: maxId + 1
  }
  teamData.push(newMember)
  return { ...newMember }
}

export const updateTeamMember = async (id, memberData) => {
  await delay(350)
  const index = teamData.findIndex(t => t.Id === parseInt(id))
  if (index === -1) {
    throw new Error('Team member not found')
  }
  teamData[index] = { ...teamData[index], ...memberData }
  return { ...teamData[index] }
}

export const deleteTeamMember = async (id) => {
  await delay(250)
  const index = teamData.findIndex(t => t.Id === parseInt(id))
  if (index === -1) {
    throw new Error('Team member not found')
  }
  const deletedMember = { ...teamData[index] }
  teamData.splice(index, 1)
  return deletedMember
}