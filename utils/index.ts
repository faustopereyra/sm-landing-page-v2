interface encodeData {
  [key: string]: string | number;
}

export const encodeURL = (data: encodeData) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
