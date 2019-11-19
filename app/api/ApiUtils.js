import BackendConfig from '../config/BackendConfig'
import AsyncStorage from '@react-native-community/async-storage';
export const loginApi = async (username, password) => {
      try{
      const response = await fetch(BackendConfig.url+'api-token-auth/', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password,
        })
      });
      if(response.status == 200){
        const data = await response.json();
        const stored = await _storeData('AUTH-TOKEN', data.token);
        return {'failed':false};
      }
      else{
        return {'failed':true, 'error':'Invalid credentials!'}
      }
    }
    catch (e){
      return {'failed':true, 'error':'Unable to connect to backend!'}
    }
    }

export const getTasks = async () => {
  const token = await _fetchData('AUTH-TOKEN');

  try{
    const response = await fetch(BackendConfig.url + 'tasks/',{
      method: 'GET',
      headers: {
        "Authorization": "Token "+ token,
      },
    });
    const data = response.json();
    console.log("here");
    return data;
  }
  catch(e){
    return false;
  }
}

export const updateTask = async (data) => {
  const token = await _fetchData('AUTH-TOKEN');
  try{
    console.log(token);
    const response = await fetch(BackendConfig.url + 'tasks/'+data.taskid+'/',{
      method: 'PUT',
      headers: {
        "Authorization": "Token "+ token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'

      },
      body: JSON.stringify(data)
    });
    const updatedData = response.json();
    console.log(updatedData);
    return data;
  }
  catch(e){
    return false;
  }


}

export const is_logged_in = async () => {
  try {
    const value = await AsyncStorage.getItem('AUTH-TOKEN');
    if (value !== null) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }

}

_fetchData = async (key) => {
  try{
    const value = await AsyncStorage.getItem(key);
    if(value !== null){
      return value;
    }
    else {
      return false;
    }
  }
  catch(e){
    return null;
  }
}

export const _userLogout = async () => {
  try {
    const resp = await AsyncStorage.removeItem('AUTH-TOKEN');
    return true;
  } catch (error) {
    return false;
  }
},

_storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (error) {
      return false;
    }
  };