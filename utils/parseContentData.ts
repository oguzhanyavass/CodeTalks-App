const parseContentData = (data: any) => {
  const parsedData = [];

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const room = data[key];

      // `roomName` anahtarının altındaki veriyi ayıklamak için kontrol ediyoruz.
      const roomNameObject = room.roomName;
      const contentObject = {
        id: key,
        roomName: roomNameObject.roomName || 'Unnamed Room',  // Oda adı varsa al, yoksa varsayılan isim kullan.
        imageUrl: roomNameObject.imageUrl || '',  // Resim URL'si varsa al, yoksa boş string.
        creatorName: room.creatorName || 'Unknown',  // Yaratıcının ismi varsa al, yoksa 'Unknown' kullan.
        date: room.date || '',  // Tarih varsa al, yoksa boş string.
      };

      parsedData.push(contentObject);
    }
  }

  return parsedData;
};


export default parseContentData;