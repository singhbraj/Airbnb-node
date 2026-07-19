package db
import (
	"database/sql"
	"fmt"
	"AuthInGo/models"
)

type UserRepository interface{
	GetById() (*models.User, error)
	Create()  error
}

type UserRepositoryImpl struct{
   db *sql.DB
}

func NewUserRepository(_db *sql.DB) UserRepository {
	return &UserRepositoryImpl{
		db: _db,
	}
}

func (u *UserRepositoryImpl) Create()  error{
	fmt.Println("Creating user in user repository")
	query := "INSERT INTO users (username, email, password) VALUES (?, ?, ?)"

	result, err := u.db.Exec(query, "test", "test@test.com", "test")
	if err != nil {
		return err
	}
	
      rowsAffected, err := result.RowsAffected()
      if err != nil {
		return err
	  }
	  if rowsAffected == 0 {
		return fmt.Errorf("user not created")
	  }
	  fmt.Println("User created successfully: ", rowsAffected)
	  return nil
}


func (u *UserRepositoryImpl) GetById() (*models.User, error){
 fmt.Println("Fetching user by id in user repository")

 // Step 1 : prepare the query

query := "SELECT id, username, email, created_at, updated_at FROM users WHERE id = ?"

// Step 2 : execute the query
row := u.db.QueryRow(query, 1)


user := &models.User{}

err := row.Scan(&user.ID, &user.Username, &user.Email, &user.CreatedAt, &user.UpdatedAt)
if err != nil {
	if err == sql.ErrNoRows {
		return nil, fmt.Errorf("user not found")
	}else{
		fmt.Println("Error scanning row: ", err)
		return nil, err
	}
}

fmt.Println("User fetched successfully: ", user)
 return user, nil;
}