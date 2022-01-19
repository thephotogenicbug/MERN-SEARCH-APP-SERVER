class FilterFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }
  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i", // case insensitive
          },
        }
      : {};
    // console.log(keyword)
    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };
    // console.log(queryCopy);
    // removing some field for category
    const removeFields = ["keyword", "page", "limit"];
    removeFields.forEach((key) => delete queryCopy[key]);
    // console.log(queryCopy);

    // Filter for Price and Rating
    // console.log(queryCopy)
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`); // greater then less then greater then equal to less then equal to

    // console.log(queryCopy);
    this.query = this.query.find(JSON.parse(queryStr));
    // console.log(queryStr);
    return this;
  }

  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1; // 50 - 10

    const skip = resultPerPage * (currentPage - 1); // if the page is 2 then skip 10th product and display 11th product

    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }
}

module.exports = FilterFeatures;
