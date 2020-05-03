class Pagination {

  constructor(data) {
    this.pages = data.pages;
    this.total = data.total;
    this.last_page = data.last_page;
    this.current_page = data.current_page;
    this.first_page_url = data.first_page_url;
    this.last_page_url = data.last_page_url;
    this.next_page_url = data.next_page_url;
    this.prev_page_url = data.prev_page_url;
    this.per_page = data.per_page;
    this.from = data.from;
    this.to = data.to;
    this.data = data.data;
  }
}

export default Pagination
