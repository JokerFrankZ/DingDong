import service from '@/utils/request'

export function getSearchMessage() {
  return service.request({
    url: 'goods'
  })
}
