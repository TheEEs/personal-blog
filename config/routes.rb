Rails.application.routes.draw do
  authenticate :user do 
    resources :posts, except: [:index,:show]
  end
  
  resources :posts,only: [:index,:show]
  get 'pages/:page_number' , to: 'posts#index', as: :index_with_pagenum,:page_number => 1
  devise_for :users,controllers: { registrations: "registrations"}
  
  root 'posts#index', :page_number => 1
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
