import axios from 'axios';

const url = 'https://qootest.com/posts'
const weatherAuth = 'CWB-8D8B5254-991F-47D6-A679-B8EE1C6CDAE2'
const weatherDataId = 'F-C0032-001'

export const getPosts = () => axios.get(url)

export const getSinglePost = (listId) => axios.get(url + '/' + listId)

export const editSinglePost = (listId, title, body) => axios.patch(url + '/' + listId,{ title:title, body:body ,author:'xxxxx'})

export const deleteSinglePost = (listId) => axios.delete(url + '/' + listId)

export const getWeather = () => axios.get(`https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/${weatherDataId}?Authorization=${ weatherAuth}&format=JSON`)

/**
 * ※ URL： https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/{weatherDataid}?Authorization={apikey}&format={format}
                
{weatherDataid} 為各資料集代碼 (參照：資料清單)  ex.F-A0012-001
                
{apikey} 為會員帳號對應之授權碼  ex.CWB-1234ABCD-78EF-GH90-12XY-IJKL12345678
                
{format} 為資料格式，請參照各資料集頁面確認可下載之檔案格式  ex.XML、CAP、JSON、ZIP、KMZ、GRIB2
                
※ 範例：https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-A0012-001?Authorization=CWB-1234ABCD-78EF-GH90-12XY-IJKL12345678&format=XML
                
並請加入快取功能，如上述所示。
 */