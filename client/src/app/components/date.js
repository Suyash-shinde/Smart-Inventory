export const getDate = () => {
    const today = new Date();
    const year = today.getFullYear();

    const month = String(today.getMonth() + 1).padStart(2, "0"); // Ensure two digits
    const date = String(today.getDate()).padStart(2, "0"); // Ensure two digits
    return `${year}-${month}-${date}`;
  };
export   const formatToUKDate = (isoDate) => {
    const [year, month, day] = isoDate.split("-");
    return `${day}/${month}/${year}`;
  };