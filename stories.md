# User Stories for Agile Final Project - Product Catalog Backend

## Story 1: Create a Product
**As a** product manager  
**I need** the ability to create a new product in the catalog  
**So that** I can add new items to the e-commerce website for customers to purchase

### Acceptance Criteria:
```gherkin
Given I am an authorized product manager
When I submit a request to create a product with valid details (name, description, price, category)
Then the product should be created successfully
And the product should be assigned a unique identifier
And I should receive a confirmation with the product details
```

---

## Story 2: Retrieve a Product
**As a** customer  
**I need** to view detailed information about a specific product  
**So that** I can make an informed purchasing decision

### Acceptance Criteria:
```gherkin
Given a product exists in the catalog
When I request to retrieve the product by its unique identifier
Then I should receive the complete product details (name, description, price, category, likes, dislikes)
And the response should be returned in a timely manner

Given a product does not exist
When I request to retrieve a non-existent product
Then I should receive an appropriate error message
```

---

## Story 3: Update a Product
**As a** product manager  
**I need** to update existing product information  
**So that** I can keep the product catalog accurate and up-to-date

### Acceptance Criteria:
```gherkin
Given a product exists in the catalog
When I submit a request to update the product with valid changes
Then the product information should be updated successfully
And I should receive confirmation with the updated product details

Given invalid product data is provided
When I attempt to update a product
Then I should receive an error message indicating what is invalid
```

---

## Story 4: Delete a Product
**As a** product manager  
**I need** to remove products from the catalog  
**So that** I can discontinue items that are no longer available

### Acceptance Criteria:
```gherkin
Given a product exists in the catalog
When I request to delete the product
Then the product should be removed from the catalog
And I should receive confirmation of deletion

Given a product does not exist
When I attempt to delete a non-existent product
Then I should receive an appropriate error message
```

---

## Story 5: Like a Product
**As a** customer  
**I need** to like products that interest me  
**So that** I can save my preferences and help others discover popular products

### Acceptance Criteria:
```gherkin
Given a product exists in the catalog
When I like the product
Then the like count for that product should increase by 1
And I should receive confirmation that my like was recorded

Given I have already liked a product
When I attempt to like it again
Then the system should prevent duplicate likes
And I should receive an appropriate message
```

---

## Story 6: Dislike a Product
**As a** customer  
**I need** to dislike products that don't meet my expectations  
**So that** I can provide feedback and help others make better purchasing decisions

---

## Story 7: List All Products
**As a** customer  
**I need** to see a list of all available products  
**So that** I can browse the complete catalog

---

## Story 8: Query a Subset of Products
**As a** customer  
**I need** to search and filter products by specific criteria (category, price range, popularity)  
**So that** I can quickly find products that match my needs

---

## Story 9: Cloud Hosting
**As a** DevOps engineer  
**I need** the application to be hosted in the cloud  
**So that** it is scalable, reliable, and accessible to users worldwide

---

## Story 10: Automation for Deployment
**As a** DevOps engineer  
**I need** automated deployment pipelines  
**So that** code changes can be deployed quickly and reliably without manual intervention
