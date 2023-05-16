import request from "./http.js";
// 获取搜索框热搜推广词
export function getSearchHot() {
  return request({
    url: "/search/hot",
    method: "get",
  });
}
//获取发现页数据,包含:轮播图 , 推荐歌单
export function getFind() {
  return request({
    url: "/homepage/block/page",
    method: "get",
  });
}
//获取发现页圆形图标入口列表
export function getBall() {
  return request({
    url: "/homepage/dragon/ball",
    method: "get",
  });
}
//获取歌单列表详情页
export function getPlayListDetail(id) {
  return request({
    url: `/playlist/detail?id=${id}`,
    method: "get",
  });
}
export function getPlayListTrackAll(id, limit = 15, offset = 0) {
  return request({
    url: `/playlist/track/all?id=${id}&limit=${limit}&offset=${offset}`,
    method: "get",
  });
}
// standard => 标准,higher => 较高, exhigh=>极高, lossless=>无损, hires=>Hi-Res, jyeffect => 鲸云臻音, jymaster => 鲸云母带
export function getSongUrl(id, level) {
  let quality = null;
  level == 7
    ? (quality = "jymaster")
    : level == 6
    ? (quality = "jyeffect")
    : level == 5
    ? (quality = "hires")
    : level == 4
    ? (quality = "lossless")
    : level == 3
    ? (quality = "exhigh")
    : level == 2
    ? (quality = "higher")
    : (quality = "standard");
  return request({
    url: `/song/url/v1?id=${id}&level=${quality}`,
    method: "get",
  });
}
export function getSongDetail(id) {
  return request({
    url: `/song/detail?ids=${id}`,
    method: "get",
  });
}
